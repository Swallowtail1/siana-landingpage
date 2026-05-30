import {Mail, Smartphone } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/Logo.png" alt="SIANA Logo" width={40} height={40} className="rounded-xl" />

              <div>
                <h3 className="font-bold">SIANA</h3>

                <p className="text-sm text-slate-500">Smart IoT Alert System</p>
              </div>
            </div>

            <p className="mt-4 text-slate-600">
              Sistem peringatan dini berbasis IoT untuk membantu mitigasi
              bencana melalui monitoring dan notifikasi real-time.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Technology</h4>

            <ul className="mt-4 space-y-2 text-slate-600">
              <li>ESP32</li>
              <li>Firebase</li>
              <li>FCM</li>
              <li>Kotlin Android</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold">Contact</h4>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>your-email@example.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaGithub size={18} />
                <span>github.com/username</span>
              </div>

              <div className="flex items-center gap-3">
                <Smartphone size={18} />
                <span>Android Application</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-slate-500">
          © 2026 SIANA. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
