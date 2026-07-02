"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { Icon } from "../shared/Icon";

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
          scrolled
            ? "bg-base/95 border-b border-text-primary/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-lg tracking-tight text-text-primary">
              UPBOLT<span className="text-accent font-black">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-display text-sm tracking-wide transition-colors ${
                    isActive ? "text-text-primary" : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute left-0 right-0 -bottom-1 h-[1.5px] bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA / Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button href="/contact" variant="ghost" className="py-2.5 px-5">
                Get a Proposal
              </Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-text-primary hover:text-accent md:hidden transition-colors cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >
              <Icon name={isOpen ? "close" : "menu"} size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-base/98 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col justify-between pb-12"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-display text-2xl font-bold tracking-tight py-2 ${
                      isActive ? "text-accent" : "text-text-primary hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col gap-6">
              <Button href="/contact" variant="primary" className="w-full text-center py-4">
                Get a Proposal
              </Button>
              <div className="flex items-center justify-center gap-6 text-text-muted mt-4">
                <a href="https://instagram.com/upbolt.studios" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  <Icon name="instagram" size={20} />
                </a>
                <a href="mailto:hello@upboltstudios.com" className="hover:text-accent">
                  <Icon name="email" size={20} />
                </a>
                <a href="https://wa.me/15553891029" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  <Icon name="whatsapp" size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
