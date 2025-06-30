import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-gray-900 to-blue-950 backdrop-blur-lg shadow-md transition duration-500">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide">
          MyPortofolio
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-base">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition-colors duration-300 hover:text-blue-400"
              >
                {item}
                <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-300 bg-blue-400"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
