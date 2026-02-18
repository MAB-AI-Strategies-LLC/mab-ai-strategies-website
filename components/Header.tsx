"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/contact", label: "Member Login", highlight: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0e1f]/95 backdrop-blur-md border-b border-[#d4af37]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#d4af37] group-hover:border-[#f4d03f] transition-all duration-300 shadow-lg shadow-[#d4af37]/20">
              <Image
                src="/media/OfficialCompanyLogo.jpg"
                alt="MAB AI Strategies"
                fill
                className="object-cover scale-125"
              />
            </div>
            <span className="text-2xl font-bold hidden sm:block bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent">
              MAB AI Strategies LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#d4af37] ${
                  link.highlight
                    ? "px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/50 rounded-full hover:bg-[#d4af37]/20"
                    : "text-[#f8f6f1]/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0a0e1f]/98 backdrop-blur-lg border-b border-[#d4af37]/20 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col py-6 px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 px-4 rounded-lg transition-all ${
                link.highlight
                  ? "bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/50"
                  : "text-[#f8f6f1] hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
