import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-b from-blue-950 to-gray-900 text-white flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Blur Elements */}
      <div className="absolute w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 top-10 left-10" />
      <div className="absolute w-72 h-72 bg-indigo-700 rounded-full mix-blend-multiply filter blur-2xl opacity-20 -z-10 bottom-10 right-10" />

      {/* Content */}
      <div data-aos="fade-up" data-aos-duration="1000" className="max-w-3xl w-full z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-8 tracking-tight">
          Kontak
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 mb-4">
          Tertarik bekerja sama atau ngobrol seputar teknologi? Silakan hubungi saya.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            📧 Email:{" "}
            <a href="akhdanshalahudin.com" className="text-blue-300 hover:underline">
              akhdanshalahudin@gmail.com
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/akhdan-shalahudin-12232b271/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              https://www.linkedin.com/in/akhdan-shalahudin-12232b271/
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
