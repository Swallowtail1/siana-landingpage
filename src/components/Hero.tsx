"use client";

import { motion } from "framer-motion";
import { Bell, ShieldCheck, Activity } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

      <div className="absolute top-40 left-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 w-fit rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
          >
            IoT-Based Disaster Early Warning System
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl"
          >
            SIANA
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-2xl font-semibold text-blue-600"
          >
            Smart Integrated Alert & Notification Assistant
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-lg text-slate-600"
          >
            Sistem peringatan dini berbasis IoT yang memanfaatkan sensor ESP32,
            Firebase Cloud Messaging, dan aplikasi Android untuk memberikan
            notifikasi bencana secara real-time.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="https://github.com/Swallowtail1/siana" target="_blank" 
      rel="noopener noreferrer" className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
              View Project
            </Link>

            <Link href="/documentation" className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
              Documentation
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>

              <p className="text-sm text-slate-500">Monitoring</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">Real-Time</h3>

              <p className="text-sm text-slate-500">Alert</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">Cloud</h3>

              <p className="text-sm text-slate-500">Connected</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center justify-center">
          {/* Floating Alert */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute top-24 left-0 z-10 rounded-2xl border border-red-200 bg-white p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <Bell className="text-red-500" />

              <div>
                <h4 className="font-semibold">Emergency Alert</h4>

                <p className="text-sm text-slate-500">
                  Potential flood detected
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="relative h-[600px] w-[300px] rounded-[40px] border-[10px] border-slate-900 bg-slate-900 shadow-2xl"
          >
            <Image src="/dashboard.png" alt="Phone Mockup" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="eager" className="rounded-[40px]" />

          </motion.div>

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute bottom-24 right-0 rounded-2xl border border-green-200 bg-white p-5 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-500" />

              <div>
                <h4 className="font-semibold">System Active</h4>

                <p className="text-sm text-slate-500">Connected to Firebase</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
