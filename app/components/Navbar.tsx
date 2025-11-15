"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 backdrop-blur-xl
        transition-all duration-300
        ${
          scrolled
            ? "bg-black/60 border-neutral-800"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">

        {/* LOGO */}
        <a 
          href="#hero"
          className="text-xl font-bold tracking-wider text-white hover:text-[#ff7b00] transition"
        >
          Vyom<span className="text-[#ff7b00]">Garud</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#about" className="nav-link">About</a>
          <a href="#capabilities" className="nav-link">Capabilities</a>
          <a href="#highlights" className="nav-link">Highlights</a>
          <a href="#contact" className="px-4 py-2 rounded-xl bg-[#ff7b00] text-black font-semibold hover:bg-[#ff8c1a] transition">
            Contact
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/70 backdrop-blur-xl border-t border-neutral-800 py-4 space-y-4 px-4"
        >
          <a href="#about" onClick={() => setOpen(false)} className="mobile-link">About</a>
          <a href="#capabilities" onClick={() => setOpen(false)} className="mobile-link">Capabilities</a>
          <a href="#highlights" onClick={() => setOpen(false)} className="mobile-link">Highlights</a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-4 py-2 rounded-xl bg-[#ff7b00] text-black font-semibold hover:bg-[#ff8c1a] transition"
          >
            Contact
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
