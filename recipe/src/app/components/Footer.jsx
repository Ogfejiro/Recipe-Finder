import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-black py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        {/* Branding */}
        <h1 className="text-2xl md:text-3xl font-bold hover:text-yellow-400 transition-colors duration-300">
          Alisha Recipe-Finder
        </h1>

        {/* Tagline */}
        <p className="text-sm md:text-base max-w-lg mx-auto text-gray-800">
          Helping you find the right recipes for every diet — simple, stress-free,
          and delicious.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/20 w-3/4 mx-auto"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-700">
          © {new Date().getFullYear()} BuildWithAlisha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
