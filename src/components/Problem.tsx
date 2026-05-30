"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock3, MapPinned } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Risiko Bencana Tinggi",
    description:
      "Indonesia memiliki potensi tinggi terhadap banjir, longsor, dan bencana alam lainnya yang memerlukan sistem peringatan dini yang cepat.",
  },
  {
    icon: Clock3,
    title: "Keterlambatan Informasi",
    description:
      "Informasi kondisi darurat sering terlambat diterima masyarakat sehingga mengurangi waktu evakuasi.",
  },
  {
    icon: MapPinned,
    title: "Monitoring Terbatas",
    description:
      "Pemantauan kondisi lingkungan secara manual sulit dilakukan secara terus-menerus dan real-time.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-28 bg-slate-50">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-blue-600 font-semibold">Problem</span>

          <h2 className="mt-4 text-4xl font-bold">Mengapa SIANA Dibutuhkan?</h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Sistem peringatan dini yang cepat dan akurat dapat membantu
            mengurangi dampak bencana dengan memberikan informasi sebelum
            kondisi menjadi lebih berbahaya.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100"
              >
                <Icon className="h-12 w-12 text-blue-600" />

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
