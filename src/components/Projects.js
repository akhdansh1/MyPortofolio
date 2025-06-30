import React from 'react';
import project1 from '../assets/projek1.jpg';
import projectVideo2 from '../assets/projek2.mp4';
import projectVideo3 from '../assets/projek3.mp4';
import project4 from '../assets/projek4.jpg';
import project5 from '../assets/projek5.jpg';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-b from-gray-900 to-blue-950 text-white overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 top-0 left-0" />
      <div className="absolute w-80 h-80 bg-purple-800 rounded-full mix-blend-multiply filter blur-2xl opacity-20 -z-10 bottom-0 right-0" />

      {/* Heading */}
      <div data-aos="fade-up" data-aos-duration="1000" className="text-center z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-400 tracking-tight mb-12">
          Proyek Saya
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto z-10">
        {/* Project 1 - Gambar */}
        <div className="space-y-3 text-left">
          <img
            src={project1}
            alt="Landing Page WiFi ITSB"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold text-blue-300">Landing Page WiFi ITSB</h3>
          <p className="text-gray-300 text-sm">
            Merancang landing page untuk akses WiFi kampus ITSB dengan desain user-friendly dan responsif.
          </p>
        </div>

        {/* Project 2 - Video */}
        <div className="space-y-3 text-left">
          <video
            src={projectVideo2}
            controls
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold text-blue-300">MediConnect</h3>
          <p className="text-gray-300 text-sm">
            Aplikasi platform kesehatan yang dibangun menggunakan React & Tailwind CSS untuk koneksi dokter dan pasien.
          </p>
        </div>

        {/* Project 3 - Video */}
        <div className="space-y-3 text-left">
          <video
            src={projectVideo3}
            controls
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold text-blue-300">ITSB One</h3>
          <p className="text-gray-300 text-sm">
            Website portal informasi kampus berbasis Laravel 11 dengan fitur berita, pengumuman, dan agenda kegiatan.
          </p>
        </div>

        {/* Project 4 - Gambar */}
        <div className="space-y-3 text-left">
          <img
            src={project4}
            alt="Deteksi Kendaraan YOLOv8"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold text-blue-300">Deteksi Kendaraan - YOLOv8</h3>
          <p className="text-gray-300 text-sm">
            Sistem deteksi kendaraan real-time menggunakan YOLOv8 untuk pengawasan lalu lintas yang efisien.
          </p>
        </div>

        {/* Project 5 - Gambar */}
        <div className="space-y-3 text-left">
          <img
            src={project5}
            alt="Deteksi Kendaraan YOLOv9"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold text-blue-300">Deteksi Kendaraan - YOLOv9</h3>
          <p className="text-gray-300 text-sm">
            Peningkatan sistem deteksi kendaraan berbasis YOLOv9 dengan akurasi lebih tinggi dan performa lebih cepat.
          </p>
        </div>
      </div>
    </section>
  );
}
