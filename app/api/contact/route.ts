import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the contact form submission
    console.log("Contact form submission:", {
      ...body,
      receivedAt: new Date().toISOString(),
    });

    // TODO: Configure your webhook endpoint here
    // Examples:
    // - n8n webhook: "https://your-n8n-instance.com/webhook/contact-form"
    // - Make/Zapier: "https://hooks.zapier.com/hooks/catch/..."
    // - Custom backend: "https://your-api.com/contact"
    
    // Example webhook call (uncomment and configure as needed):
    /*
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
    */

    // For now, return success - implement actual webhook as needed
    return NextResponse.json(
      { 
        success: true, 
        message: "Message received successfully",
        data: body 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to process message" 
      },
      { status: 500 }
    );
  }
}
