import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MAB AI Strategies",
  description: "How MAB AI Strategies collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1f] text-[#f8f6f1]">
      <Header />

      <section className="pt-32 pb-24 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold gradient-gold mb-4">Privacy Policy</h1>
          <p className="text-[#f8f6f1]/50 text-sm mb-12">
            Effective date: April 8, 2026 &nbsp;|&nbsp; Last updated: April 8, 2026
          </p>

          <div className="prose prose-invert prose-gold space-y-10 text-[#f8f6f1]/80 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">1. Who We Are</h2>
              <p>
                MAB AI Strategies LLC (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website{" "}
                <a href="https://mabaistrategies.com" className="text-[#d4af37] hover:underline">
                  https://mabaistrategies.com
                </a>
                . We provide enterprise AI automation consulting and implementation services.
                Questions about this policy may be directed to{" "}
                <a href="mailto:contact@mabaistrategies.com" className="text-[#d4af37] hover:underline">
                  contact@mabaistrategies.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">2. Information We Collect</h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Contact details: name, email address, phone number</li>
                <li>Business information: company name, job title</li>
                <li>Inquiry details submitted via our contact form</li>
              </ul>
              <p className="mt-3">
                We do not currently use cookies for tracking or analytics. We do not collect payment
                information directly — any future payment processing will be handled by PCI-compliant
                third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Respond to your inquiries and schedule consultations</li>
                <li>Provide and improve our services</li>
                <li>Send updates and communications you have requested</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We will never sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">4. How We Share Your Information</h2>
              <p>
                We may share your information with trusted service providers who assist us in
                operating our website and delivering services (e.g., CRM platforms, email providers,
                scheduling tools). These providers are contractually obligated to protect your data
                and may not use it for their own purposes.
              </p>
              <p className="mt-3">
                We may disclose information when required by law or to protect our legal rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes
                outlined in this policy, unless a longer retention period is required by law. You
                may request deletion of your data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">6. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict certain processing</li>
                <li>Data portability (where applicable)</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:contact@mabaistrategies.com" className="text-[#d4af37] hover:underline">
                  contact@mabaistrategies.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">7. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information. Our website uses HTTPS encryption for all data in transit.
                However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party services (e.g., Google Calendar,
                LinkedIn). We are not responsible for the privacy practices of those services and
                encourage you to review their policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">9. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not
                knowingly collect personal information from minors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes by updating the date at the top of this page. Continued use of
                our website after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">11. Contact</h2>
              <p>
                For privacy-related questions or requests, contact us at:
              </p>
              <address className="mt-3 not-italic">
                MAB AI Strategies LLC<br />
                <a href="mailto:contact@mabaistrategies.com" className="text-[#d4af37] hover:underline">
                  contact@mabaistrategies.com
                </a>
              </address>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
