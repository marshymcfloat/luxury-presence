"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/listings" },
  { label: "Our Team", href: "/our-team" },
  { label: "About Us", href: "/about-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled || isOpen
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-neutral-200/50"
          : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-full">
        <Link href="/" className="relative z-50">
          <div
            className={cn(
              "transition-all duration-300",
              scrolled ? "scale-90" : "scale-100"
            )}
          >
            <Image
              src={"/company-logo.webp"}
              alt="The Ridge Realty Group"
              width={120}
              height={40}
              className="object-contain w-auto h-10 md:h-12"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 relative group",
                      scrolled ? "text-neutral-800" : "text-neutral-800",
                      isActive ? "text-neutral-900" : "hover:text-neutral-500"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px bg-neutral-400 transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="w-px h-4 bg-neutral-300 mx-2" />

          <Button
            variant="ghost"
            className={cn(
              "text-xs uppercase tracking-[0.2em] font-semibold hover:bg-transparent hover:text-neutral-500 px-0 transition-colors",
              scrolled ? "text-neutral-900" : "text-neutral-900"
            )}
          >
            Contact
          </Button>
        </nav>

        <button
          className="md:hidden p-2 text-neutral-800 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current transition-transform"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-current transition-opacity"
            />
            <motion.span
              animate={
                isOpen
                  ? { rotate: -45, y: -8, width: "24px" }
                  : { rotate: 0, y: 0, width: "16px" }
              }
              className="block h-0.5 bg-current ml-auto transition-all"
            />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-start items-center pt-32 h-dvh"
            >
              <ul className="flex flex-col items-center gap-8">
                {NAV_LINKS.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={cn(
                          "text-xl uppercase tracking-[0.2em] font-medium transition-colors",
                          isActive
                            ? "text-neutral-900"
                            : "text-neutral-500 hover:text-neutral-900"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="mt-8">
                  <Button
                    className="bg-neutral-900 text-white rounded-full px-8 py-6 text-sm uppercase tracking-widest"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
