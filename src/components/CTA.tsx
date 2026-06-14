"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28">
      {" "}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-12 md:p-20 text-center text-white"
        >
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10" />

          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10" />

          <div className="relative">
            <span className="font-medium text-blue-100">
              Future of Disaster Mitigation
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Faster Information.
              <br />
              Safer Communities.
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-blue-100">
              SIANA membantu masyarakat mendapatkan informasi bencana secara
              cepat dan akurat melalui teknologi IoT dan notifikasi real-time.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/documentation" className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
                View Documentation
              </Link>

              <Link href="https://github.com/Swallowtail1/siana/releases/download/v1.0.0/app-debug.apk" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                Download App
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
