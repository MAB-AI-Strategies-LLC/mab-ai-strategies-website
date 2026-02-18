"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Mail, Calendar } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mark-bockrath-a5a1b2196/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/mab_ai_CEO", label: "Twitter" },
    { icon: Mail, href: "mailto:mark@mabaistrategies.com", label: "Email" },
    { icon: Calendar, href: "https://calendar.app.google/kuwKF2VrDuyvdfN9A", label: "Schedule" },
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "AI Readiness Audits", href: "/services" },
        { label: "Automation Library", href: "/services" },
        { label: "Custom Websites", href: "/services" },
        { label: "Custom Agents", href: "/services" },
        { label: "Speaking", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Case Studies", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Newsletter", href: "#" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0a0e1f] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-[#d4af37]/50">
                <Image
                  src="/media/OfficialCompanyLogo.jpg"
                  alt="MAB AI Strategies"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold gradient-gold">
                MAB AI Strategies
              </span>
            </Link>
            <p className="text-[#f8f6f1]/70 max-w-md mb-6">
              Converting chaos into consistency, and consistency into currency.
              Enterprise AI automation for businesses ready to lead the future.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full bg-[#d4af37]/10 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0e1f] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-[#d4af37] font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#f8f6f1]/70 hover:text-[#d4af37] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#d4af37]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#f8f6f1]/50 text-sm">
            &copy; {currentYear} MAB AI Strategies. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="#" className="text-[#f8f6f1]/50 hover:text-[#d4af37] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#f8f6f1]/50 hover:text-[#d4af37] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
