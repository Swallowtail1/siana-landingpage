"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

export default function Preview() {
  return (
    <section className="py-28 bg-slate-50">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="font-semibold text-blue-600">Dashboard</span>

          <h2 className="mt-4 text-4xl font-bold">Monitoring Interface</h2>

          <p className="mt-4 text-slate-600">
            Tampilan aplikasi yang digunakan pengguna untuk memonitor kondisi
            lingkungan.
          </p>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="bg-slate-100 px-6 py-4 flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 p-8">
            <Image src="/login.png" alt="Login Page Screenshot" width={400} height={300} className="rounded-lg shadow-sm" />
            <Image src="/notification.png" alt="Notification Screenshot" width={400} height={300} className="rounded-lg shadow-sm" />
            <Image src="/treshold.png" alt="Threshold Screenshot" width={400} height={300} className="rounded-lg shadow-sm" />
            <Image src="/dashboard.png" alt="Dashboard Screenshot 1" width={400} height={300} className="rounded-lg shadow-sm" />
            <Image src="/dashboard2.png" alt="Dashboard Screenshot 2" width={400} height={300} className="rounded-lg shadow-sm" />
            <Image src="/dashboard3.png" alt="Dashboard Screenshot 3" width={400} height={300} className="rounded-lg shadow-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
