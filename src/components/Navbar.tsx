"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  // State untuk mengontrol buka/tutup menu di HP
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menutup menu setelah link diklik
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LOGO & BRAND */}
        <div className="flex items-center gap-3">
          <div>
            <Image 
              src="/Logo.png" 
              alt="SIANA Logo" 
              width={40} 
              height={40} 
              className="rounded-xl" 
              priority 
            />
          </div>
          <div>
            <h1 className="font-bold text-slate-900 leading-none">SIANA</h1>
            <p className="text-[10px] sm:text-xs text-slate-500 mt-1">
              Smart IoT Alert System
            </p>
          </div>
        </div>

        {/* DESKTOP NAVIGATION (Sembunyi di HP, muncul di layar md ke atas) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link href="#problem" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">
            Problem
          </Link>
          <Link href="#solution" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">
            Solution
          </Link>
          <Link href="#features" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">
            Features
          </Link>
          <Link href="#technology" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">
            Technology
          </Link>
          <Link href="https://github.com/Swallowtail1/siana/releases/download/v1.0.0/SIANA.apk" target="_blank" 
      rel="noopener noreferrer" className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
              Download App
            </Link>
        </div>

        {/* HAMBURGER BUTTON (Hanya muncul di HP/layar kecil) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Animasi Ikon Hamburger ke silang (X) sederhana */}
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.831-4.828 4.83a1 1 0 01-1.414-1.414l4.829-4.83-4.829-4.83a1 1 0 011.414-1.414l4.828 4.83 4.829-4.83a1 1 0 111.414 1.414l-4.83 4.83 4.83 4.83z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN (Muncul dengan animasi slide down) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden bg-white border-t border-slate-100"
          >
            <div className="flex flex-col gap-4 px-6 py-4 font-medium text-sm">
              <Link href="#problem" onClick={closeMenu} className="text-slate-600 hover:text-blue-600 py-1 transition-colors">
                Problem
              </Link>
              <Link href="#solution" onClick={closeMenu} className="text-slate-600 hover:text-blue-600 py-1 transition-colors">
                Solution
              </Link>
              <Link href="#features" onClick={closeMenu} className="text-slate-600 hover:text-blue-600 py-1 transition-colors">
                Features
              </Link>
              <Link href="#technology" onClick={closeMenu} className="text-slate-600 hover:text-blue-600 py-1 transition-colors">
                Technology
              </Link>
              <Link href="https://github.com/Swallowtail1/siana/releases/download/v1.0.0/SIANA.apk" target="_blank" 
      rel="noopener noreferrer" className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 text-center">
              Download App
            </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}