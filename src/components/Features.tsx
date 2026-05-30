"use client";

import { motion } from "framer-motion";
import {
  BellRing,
  Cloud,
  Activity,
  Smartphone,
  Database,
  ShieldAlert,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Pantau kondisi lingkungan secara langsung dari sensor IoT.",
  },
  {
    icon: BellRing,
    title: "Instant Notification",
    description:
      "Notifikasi otomatis dikirim saat kondisi berbahaya terdeteksi.",
  },
  {
    icon: Cloud,
    title: "Cloud Connected",
    description: "Data tersimpan aman dan dapat diakses kapan saja.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    description: "Monitoring dan peringatan langsung melalui aplikasi Android.",
  },
  {
    icon: Database,
    title: "Historical Data",
    description: "Menyimpan riwayat data untuk analisis dan evaluasi.",
  },
  {
    icon: ShieldAlert,
    title: "Early Warning System",
    description: "Memberikan peringatan dini sebelum kondisi menjadi kritis.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-slate-50">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="font-semibold text-blue-600">Features</span>

          <h2 className="mt-4 text-4xl font-bold">Powerful Features</h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            SIANA menyediakan berbagai fitur untuk membantu proses mitigasi
            bencana secara cepat dan efektif.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100"
              >
                <div className="w-fit rounded-2xl bg-blue-100 p-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>

                <p className="mt-3 text-slate-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
