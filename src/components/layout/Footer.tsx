import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "../shared/Icon";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-base border-t border-text-primary/[0.06] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex flex-col items-start text-left mb-6 group">
                <div className="relative w-12 h-12 flex-shrink-0 mb-2">
                  <Image
                    src="/images/unbolt logo png.png"
                    alt="Unbolt Logo"
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <span className="font-display font-black text-sm tracking-wider text-text-primary leading-none uppercase">
                  UNBOLT
                </span>
                <span className="text-[7px] tracking-widest text-text-muted font-bold leading-none mt-1 uppercase">
                  DIGITAL MARKETING AGENCY
                </span>
              </Link>
              <p className="text-sm text-text-muted leading-relaxed max-w-sm mb-6">
                We plan, shoot, edit and schedule short-form video (Reels, TikToks, Shorts) to drive inbound booking inquiries for premium local brands.
              </p>
            </div>
            <div className="text-xs text-text-muted">
              Serving premium brands in <span className="text-text-primary font-medium">Hyderabad, India</span> & internationally.
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-display text-xs font-semibold tracking-wider uppercase text-text-primary mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h4 className="font-display text-xs font-semibold tracking-wider uppercase text-text-primary mb-4">
              Connect Directly
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/918897415626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  <Icon name="whatsapp" size={16} className="text-accent" />
                  +91 88974 15626
                </a>
              </li>
              <li>
                <a
                  href="mailto:unboltmedia@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  <Icon name="email" size={16} className="text-accent" />
                  unboltmedia@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/unbolt_media?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  <Icon name="instagram" size={16} className="text-accent" />
                  @unbolt_media
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-text-primary/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} Unbolt. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
