"use client";

import { motion } from "framer-motion";

const technologies = [
  "ESP32",
  "Firebase",
  "Firestore",
  "FCM",
  "Kotlin",
  "Android"
];

export default function Technology() {
  return (
    <section id="technology" className="py-28">
      {" "}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="font-semibold text-blue-600">Technology</span>

          <h2 className="mt-4 text-4xl font-bold">Technology Stack</h2>

          <p className="mt-4 text-slate-600">
            Dibangun menggunakan teknologi modern untuk memastikan performa dan
            skalabilitas.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
              }}
              className="rounded-full border border-blue-200 bg-blue-50 px-6 py-3 font-medium text-blue-700"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
