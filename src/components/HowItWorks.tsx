"use client";

import { motion } from "framer-motion";
import { Cpu, Database, BellRing, Smartphone } from "lucide-react";

const steps = [
  {
    icon: Cpu,
    title: "Sensor Monitoring",
    description:
      "ESP32 membaca data sensor lingkungan seperti ketinggian air, curah hujan, atau parameter lainnya.",
  },
  {
    icon: Database,
    title: "Cloud Synchronization",
    description:
      "Data dikirim ke Firebase Firestore secara realtime untuk diproses dan disimpan.",
  },
  {
    icon: BellRing,
    title: "Alert Detection",
    description:
      "Ketika nilai sensor melewati ambang batas tertentu, sistem otomatis memicu peringatan.",
  },
  {
    icon: Smartphone,
    title: "User Notification",
    description:
      "Firebase Cloud Messaging mengirim notifikasi langsung ke aplikasi Android pengguna.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="font-semibold text-blue-600">Workflow</span>

          <h2 className="mt-4 text-4xl font-bold">How SIANA Works</h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            SIANA bekerja secara otomatis mulai dari pengambilan data sensor
            hingga pengiriman notifikasi darurat kepada pengguna.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="relative"
              >
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>

                  <div className="mt-6">
                    <span className="text-sm font-semibold text-blue-600">
                      STEP {index + 1}
                    </span>

                    <h3 className="mt-2 text-xl font-bold">{step.title}</h3>

                    <p className="mt-3 text-slate-600">{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-4 w-8 h-[2px] bg-blue-300" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
