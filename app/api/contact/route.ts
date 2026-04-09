import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  position?: string;
  phone?: string;
  coreTask: string;
  endGoal: string;
  alternateReason?: string;
  timestamp: string;
  source: string;
  // honeypot — must be empty
  _hp?: string;
  // ROI calculator extras
  hoursPerWeek?: number;
  hourlyRate?: number;
  numEmployees?: number;
  efficiencyGain?: number;
  annualSavings?: number;
}

// ─── Validation ───────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALID_END_GOALS = new Set([
  "free_time",
  "culture",
  "revenue",
  "acquisition",
  "new_branch",
  "ipo",
  "something_bigger",
]);

function validate(body: Partial<ContactPayload>): string | null {
  if (!body.name?.trim() || body.name.length > 120) return "Valid name is required.";
  if (!body.email?.trim() || !EMAIL_RE.test(body.email) || body.email.length > 254)
    return "Valid email address is required.";
  if (body.company && body.company.length > 200) return "Company name is too long.";
  if (body.position && body.position.length > 200) return "Position/title is too long.";
  if (!body.coreTask?.trim() || body.coreTask.length > 500) return "Core task description is required.";
  if (!body.endGoal || !VALID_END_GOALS.has(body.endGoal)) return "Please select a valid end goal.";
  if (body.phone && body.phone.length > 30) return "Phone number is too long.";
  if (body.alternateReason && body.alternateReason.length > 2000)
    return "Additional message is too long.";
  return null;
}

// ─── In-memory rate limiter ───────────────────────────────────────────────────
// For production at scale, replace with Upstash Redis (@upstash/ratelimit).

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;        // max requests
const RATE_WINDOW_MS = 60_000; // per 60 seconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ─── Normalise payload → sheet column names ───────────────────────────────────
// Columns: Timestamp | Source | Full Name | Email | Phone | Company |
//   Position/Title | Industry | Business Type | Goal | Core Task | Notes |
//   Website Type | Design Style | Features | Timeline | Budget ($) |
//   ROI Annual Savings ($) | Hours/Week | Hourly Rate ($) | Employees | Status

function toSheetRow(p: ContactPayload) {
  return {
    Timestamp:               p.timestamp,
    Source:                  p.source,
    "Full Name":             p.name,
    Email:                   p.email,
    Phone:                   p.phone ?? "",
    Company:                 p.company ?? "",
    "Position/Title":        p.position ?? "",
    Industry:                "",          // populated by questionnaire webhook
    "Business Type":         "",          // populated by questionnaire webhook
    Goal:                    p.endGoal,
    "Core Task":             p.coreTask,
    Notes:                   p.alternateReason ?? "",
    "Website Type":          "",
    "Design Style":          "",
    Features:                "",
    Timeline:                "",
    "Budget ($)":            "",
    "ROI Annual Savings ($)": p.annualSavings ?? "",
    "Hours/Week":            p.hoursPerWeek ?? "",
    "Hourly Rate ($)":       p.hourlyRate ?? "",
    Employees:               p.numEmployees ?? "",
    Status:                  "New",
  };
}

// ─── Webhook delivery ─────────────────────────────────────────────────────────

async function deliverWebhook(payload: ContactPayload): Promise<void> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) return;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Secret": process.env.CONTACT_WEBHOOK_SECRET ?? "",
        "X-Source": "mab-ai-website",
      },
      body: JSON.stringify(toSheetRow(payload)),
      signal: controller.signal,
    });

    if (!res.ok) {
      console.error(`[contact] Webhook delivery failed: ${res.status} ${res.statusText}`);
    }
  } catch (err) {
    console.error("[contact] Webhook delivery error:", err instanceof Error ? err.message : err);
  } finally {
    clearTimeout(timeout);
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot check — bots fill hidden fields, humans don't
  if (body._hp) {
    // Return 200 to fool bots; discard silently
    return NextResponse.json({ success: true, message: "Message received." }, { status: 200 });
  }

  // Validate fields
  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ success: false, message: validationError }, { status: 422 });
  }

  const payload: ContactPayload = {
    name: body.name!.trim(),
    email: body.email!.trim().toLowerCase(),
    company: body.company?.trim() ?? "",
    position: body.position?.trim() ?? "",
    phone: body.phone?.trim() ?? "",
    coreTask: body.coreTask!.trim(),
    endGoal: body.endGoal!,
    alternateReason: body.alternateReason?.trim() ?? "",
    timestamp: new Date().toISOString(),
    source: body.source?.trim() || "MAB AI Website Contact Form v2",
    ...(body.hoursPerWeek !== undefined && { hoursPerWeek: body.hoursPerWeek }),
    ...(body.hourlyRate !== undefined && { hourlyRate: body.hourlyRate }),
    ...(body.numEmployees !== undefined && { numEmployees: body.numEmployees }),
    ...(body.efficiencyGain !== undefined && { efficiencyGain: body.efficiencyGain }),
    ...(body.annualSavings !== undefined && { annualSavings: body.annualSavings }),
  };

  // Deliver to webhook (non-blocking failure — don't break UX if webhook is down)
  await deliverWebhook(payload);

  return NextResponse.json(
    { success: true, message: "Message received successfully. We'll be in touch within 24 hours." },
    { status: 200 }
  );
}
