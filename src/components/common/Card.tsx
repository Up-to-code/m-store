"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const Card: React.FC<CardProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:shadow-2xl hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 text-[#173B45] leading-tight">{title}</h2>
        <p className="text-base mb-6 text-gray-700 text-center leading-relaxed">{description}</p>
        <Link
          href={buttonLink}
          className="bg-gradient-to-r from-[#FF8225] to-[#FF5722] text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          {buttonText}
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
