// Footer.jsx
import React from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Twitter
} from 'lucide-react'; // Pastikan lucide-react sudah di-install

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center gap-3">
        <div className="flex gap-4">
          <a
            href="https://github.com/akhdansh1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/akhdan-shalahudin-12232b271/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/akhdansh_/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://x.com/akhdansh_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <Twitter size={20} />
          </a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-blue-400 font-semibold">MyPortofolio</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
