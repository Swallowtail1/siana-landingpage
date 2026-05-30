'use client';
    
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DocsNavbar() {
  return (
    
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-4">

          <Link
            href="/"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <div className="h-6 w-px bg-slate-300" />

          <h1 className="font-bold">
            SIANA Documentation
          </h1>

        </div>

        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block rounded-lg border px-4 py-2"
        />

      </div>

    </header>
  );
}