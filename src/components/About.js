import React from 'react';
import profileImage from '../assets/profil.jpg'; // Ganti dengan path foto kamu

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-b from-blue-950 to-gray-900 text-white flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden"
    >
      {/* Decorative Background Blur */}
      <div className="absolute w-96 h-96 bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 top-10 left-10" />
      <div className="absolute w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-2xl opacity-20 -z-10 bottom-10 right-10" />

      {/* Kiri: Teks */}
      <div
        className="w-full md:w-1/2 text-justify z-10" // <- gunakan text-justify
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-400 tracking-tight mb-6">
          Tentang Saya
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
          I am a <span className="text-blue-300 font-medium">5th semester Informatics student</span> who focuses on <span className="text-blue-300 font-medium">web interface development</span> (front-end) and <span className="text-blue-300 font-medium">data visualization</span>. Armed with skills in <span className="text-blue-300 font-medium">HTML</span>, <span className="text-blue-300 font-medium">CSS</span>, <span className="text-blue-300 font-medium">JavaScript</span>, <span className="text-blue-300 font-medium">Bootstrap</span>, <span className="text-blue-300 font-medium">PHP</span>, and frameworks such as <span className="text-blue-300 font-medium">CodeIgniter</span>, <span className="text-blue-300 font-medium">React.js</span>, and <span className="text-blue-300 font-medium">Laravel</span>, I am able to build responsive and functional web displays.
        </p>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
          In addition, I have a strong interest in <span className="text-blue-300 font-medium">data science</span>, especially <span className="text-blue-300 font-medium">data visualization</span> and basic <span className="text-blue-300 font-medium">machine learning using Python</span>. I also serve as a <span className="text-blue-300 font-medium">Social Media Specialist</span>, actively managing digital content, analyzing performance, and optimizing digital communication strategies.
        </p>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          I continue to grow through certifications such as the <span className="text-blue-300 font-medium">Google Play Academy - Store Listing Certificate</span> and training from <span className="text-blue-300 font-medium">Dicoding</span> and <span className="text-blue-300 font-medium">CCAI</span> that cover the basics of AI, cloud, programming, data visualization, and system integration. With this combination of technical skills and digital insight, I am ready to contribute to teams and projects that value <span className="text-blue-300 font-medium">technology</span>, <span className="text-blue-300 font-medium">data</span>, and <span className="text-blue-300 font-medium">user-centric solutions</span>.
        </p>
      </div>

      {/* Kanan: Foto */}
      <div
        className="w-full md:w-1/2 flex justify-center z-10"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          src={profileImage}
          alt="Foto Profil"
          className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-lg border-4 border-blue-400"
        />
      </div>
    </section>
  );
}
