// components/Navbar.js
'use client'; // This enables the use of hooks like useState and other client-side features

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed w-full z-40">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-color2 text-xl font-bold">
              MyLogo
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-500">
              About
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-blue-500">
              Services
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col mt-4 space-y-2">
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-500">
              About
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-blue-500">
              Services
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
