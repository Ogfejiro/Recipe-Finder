import React from "react";
import Link from "next/link";


const Nav = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl 
                    flex justify-between items-center px-8 py-4 
                    bg-white/20 backdrop-blur-lg rounded-2xl 
                    border border-white/30 shadow-lg z-50">
      {/* Logo */}
      <h1 className="text-2xl text-green-800 font-bold">AL-F</h1>

      {/* Links */}
      <ul className="flex gap-8 font-medium">
        <li>
          <Link
            href="/"
            className="hover:text-gray-200 transition-colors duration-300  text-green-800"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-gray-200 transition-colors duration-300  text-green-800"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/find"
            className="hover:text-gray-200 transition-colors duration-300  text-green-800"
          >
             Diets
          </Link>
         
        
        </li>
        <li>
          <button><Link
            href="/find"
            className="hover:text-gray-200 transition-colors duration-300  text-green-800"
          >
           
          </Link>
           Find my recipie
        </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
