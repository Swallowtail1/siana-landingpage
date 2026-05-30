import Image from "next/image";

export default function DocsContent() {
  return (
    <div className="flex-1 px-8 py-16">
      <section id="introduction">
        <h1 className="text-5xl font-bold">SIANA Documentation</h1>

        <p className="mt-6 text-lg text-slate-600">
          Smart Integrated Alert & Notification Assistant merupakan sistem
          peringatan dini berbasis IoT yang dirancang untuk membantu masyarakat
          memperoleh informasi bencana secara real-time.
        </p>
      </section>

      <section id="problem-statement" className="mt-20">
        <h2 className="text-3xl font-bold">Problem Statement</h2>

        <p className="mt-4 text-slate-600">
          Banyak wilayah rawan bencana mengalami keterlambatan penyampaian
          informasi. Akibatnya masyarakat memiliki waktu yang lebih sedikit
          untuk melakukan mitigasi dan evakuasi.
        </p>
      </section>

      <section id="system-architecture" className="mt-20">
        <h2 className="text-3xl font-bold">System Architecture</h2>

        <p className="mt-4 text-slate-600">
          SIANA menghubungkan perangkat IoT, layanan cloud, dan aplikasi Android
          dalam satu ekosistem monitoring.
        </p>

        <div className="mt-10 rounded-3xl border bg-white p-8">
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="rounded-2xl bg-blue-50 p-6 shadow">ESP32</div>

            <div className="text-3xl">→</div>

            <div className="rounded-2xl bg-green-50 p-6 shadow">Firestore</div>

            <div className="text-3xl">→</div>

            <div className="rounded-2xl bg-yellow-50 p-6 shadow">FCM</div>

            <div className="text-3xl">→</div>

            <div className="rounded-2xl bg-red-50 p-6 shadow">Android App</div>
          </div>
        </div>
      </section>

      <section id="hardware-components" className="mt-20">
        <h2 className="text-3xl font-bold">Hardware Components</h2>

        <ul className="mt-6 list-disc pl-6 text-slate-600 space-y-2">
          <li>ESP32 Development Board</li>
          <li>Ultrasonic Sensor</li>
          <li>Rain Sensor</li>
          <li>Power Supply Module</li>
        </ul>
      </section>

      <section id="software-components" className="mt-20">
        <h2 className="text-3xl font-bold">Software Components</h2>

        <ul className="mt-6 list-disc pl-6 text-slate-600 space-y-2">
          <li>Firebase Firestore</li>
          <li>Firebase Cloud Messaging</li>
          <li>Kotlin Android</li>
        </ul>
      </section>

      <section id="data-flow" className="mt-20">
        <h2 className="text-3xl font-bold">Data Flow</h2>

        <div className="mt-8 rounded-3xl bg-white p-8 border">
          <pre className="text-slate-700 overflow-x-auto">
            {`Sensor
  ↓
ESP32
  ↓
Firestore
  ↓
Threshold Detection
  ↓
Firebase Cloud Messaging
  ↓
Android Application`}
          </pre>
        </div>
      </section>

      <section id="mobile-application" className="mt-20">
        <h2 className="text-3xl font-bold">Mobile Application</h2>

        <p className="mt-4 text-slate-600">
          Aplikasi Android digunakan untuk menampilkan data sensor dan menerima
          notifikasi peringatan secara real-time.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <Image
            src="/login.png"
            alt="Login"
            width={400}
            height={400}
            className="rounded-3xl border"
          />
          
          <Image
            src="/dashboard.png"
            alt="Dashboard"
            width={400}
            height={400}
            className="rounded-3xl border"
          />

          <Image
            src="/treshold.png"
            alt="Treshold Setting"
            width={400}
            height={400}
            className="rounded-3xl border"
          />

          <Image
            src="/notification.png"
            alt="Notification"
            width={400}
            height={400}
            className="rounded-3xl border"
          />
        </div>
      </section>

      <section id="notification-system" className="mt-20">
        <h2 className="text-3xl font-bold">Notification System</h2>

        <p className="mt-4 text-slate-600">
          Firebase Cloud Messaging digunakan untuk mengirim notifikasi darurat
          secara instan kepada pengguna.
        </p>
      </section>

      <section id="technology-stack" className="mt-20">
        <h2 className="text-3xl font-bold">Technology Stack</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {["ESP32", "Firebase", "Firestore", "FCM", "Kotlin", "Android"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-100 px-4 py-2 text-blue-700"
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </section>

      <section id="future-development" className="mt-20 mb-20">
        <h2 className="text-3xl font-bold">Future Development</h2>

        <ul className="mt-6 list-disc pl-6 text-slate-600 space-y-2">
          <li>AI-based risk prediction</li>
          <li>Multi-region monitoring</li>
          <li>Interactive GIS integration</li>
          <li>Offline emergency mode</li>
        </ul>
      </section>
    </div>
  );
}
