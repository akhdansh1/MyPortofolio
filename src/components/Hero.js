import React from 'react';
import Lottie from 'lottie-react';
import heroAnimation from '../assets/hero-animation.json';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-b from-blue-950 to-gray-900 text-white flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute w-96 h-96 bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 top-10 left-10" />
      <div className="absolute w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-2xl opacity-20 -z-10 bottom-10 right-10" />

      {/* Teks Kiri */}
      <div
        className="w-full md:w-1/2 text-center md:text-left z-10"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
          Halo, saya <span className="text-blue-400">Akhdan Shalahudin</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
          Frontend Developer yang berfokus pada pembuatan antarmuka modern, responsif, dan interaktif menggunakan <span className="text-blue-300 font-medium">React</span> dan <span className="text-blue-300 font-medium">Tailwind CSS</span>.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300"
        >
          Lihat Proyek Saya
        </a>
      </div>

      {/* Animasi Kanan */}
      <div
        className="w-full md:w-1/2 flex justify-center z-10"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <Lottie
          animationData={heroAnimation}
          loop
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px]"
        />
      </div>
    </section>
  );
}
