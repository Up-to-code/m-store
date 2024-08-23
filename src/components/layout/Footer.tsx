// components/Footer.js
'use client'; // This enables the use of hooks like useState and other client-side features

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">MyLogo</h2>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="/services" className="text-gray-400 hover:text-white">
              Services
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-gray-400 hover:text-white" size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-white" size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 hover:text-white" size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-gray-400 hover:text-white" size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-400">&copy; 2024 MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
