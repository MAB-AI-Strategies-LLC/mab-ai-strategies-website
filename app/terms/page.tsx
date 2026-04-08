import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MAB AI Strategies",
  description: "Terms and conditions governing use of the MAB AI Strategies website and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1f] text-[#f8f6f1]">
      <Header />

      <section className="pt-32 pb-24 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold gradient-gold mb-4">Terms of Service</h1>
          <p className="text-[#f8f6f1]/50 text-sm mb-12">
            Effective date: April 8, 2026 &nbsp;|&nbsp; Last updated: April 8, 2026
          </p>

          <div className="space-y-10 text-[#f8f6f1]/80 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the MAB AI Strategies website (
                <a href="https://mabaistrategies.com" className="text-[#d4af37] hover:underline">
                  https://mabaistrategies.com
                </a>
                ) and any related services, you agree to be bound by these Terms of Service. If you
                do not agree, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">2. Services</h2>
              <p>
                MAB AI Strategies LLC provides enterprise AI automation consulting, custom AI agent
                development, workflow automation, and related professional services. Specific terms
                for paid engagements will be detailed in separate service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">3. Use of the Website</h2>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any systems or data</li>
                <li>Transmit any harmful, offensive, or disruptive content</li>
                <li>Scrape or harvest data from the website without written consent</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">4. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, and software — is
                the property of MAB AI Strategies LLC or its licensors and is protected by
                applicable intellectual property laws. You may not reproduce, distribute, or create
                derivative works without express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">5. Disclaimer of Warranties</h2>
              <p>
                The website and its content are provided &quot;as is&quot; without warranties of any kind,
                express or implied. We do not warrant that the website will be uninterrupted,
                error-free, or free of viruses or harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, MAB AI Strategies LLC shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages arising
                from your use of the website or services, even if advised of the possibility of such
                damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for
                the content, privacy practices, or availability of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                United States and the state in which MAB AI Strategies LLC is registered, without
                regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective
                upon posting to the website. Your continued use of the website after changes
                constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d4af37] mb-3">10. Contact</h2>
              <p>
                Questions about these Terms may be directed to:
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
