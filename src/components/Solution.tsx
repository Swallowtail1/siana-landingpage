"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Smartphone, BellRing } from "lucide-react";

export default function Solution() {
  return (
    <section id="solution" className="py-28">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="font-semibold text-blue-600">Solution</span>

          <h2 className="mt-4 text-4xl font-bold">Bagaimana SIANA Bekerja?</h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            SIANA menghubungkan perangkat IoT dengan layanan cloud untuk
            mengirimkan informasi kondisi darurat secara real-time.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid gap-10 md:grid-cols-4">
            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border p-8 text-center"
            >
              <Cpu className="mx-auto h-12 w-12 text-blue-600" />

              <h3 className="mt-4 font-bold">ESP32</h3>

              <p className="mt-2 text-sm text-slate-600">
                Membaca data sensor lingkungan secara realtime.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border p-8 text-center"
            >
              <Database className="mx-auto h-12 w-12 text-blue-600" />

              <h3 className="mt-4 font-bold">Firebase</h3>

              <p className="mt-2 text-sm text-slate-600">
                Menyimpan dan mendistribusikan data ke cloud.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border p-8 text-center"
            >
              <Smartphone className="mx-auto h-12 w-12 text-blue-600" />

              <h3 className="mt-4 font-bold">Android App</h3>

              <p className="mt-2 text-sm text-slate-600">
                Menampilkan status dan kondisi lingkungan.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border p-8 text-center"
            >
              <BellRing className="mx-auto h-12 w-12 text-red-500" />

              <h3 className="mt-4 font-bold">FCM Alert</h3>

              <p className="mt-2 text-sm text-slate-600">
                Mengirim notifikasi darurat ke pengguna.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
