/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion"; // For animations
import { Button } from "../ui/button"; // Import your Button component
import { FaRocket } from "react-icons/fa"; // For icons
import Image from 'next/image'; // For importing images

const Hero = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden bg-[#F8EDED] text-[#173B45]">
      {/* Background Shapes */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute opacity-20"
        >
          {/* Gradient Circle */}
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF8225', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#B43F3F', stopOpacity: 0.5 }} />
            </linearGradient>
          </defs>
          <circle cx="250" cy="250" r="200" fill="url(#grad1)" />
          <circle cx="150" cy="150" r="100" fill="none" stroke="#FF8225" strokeWidth="20" />
          <circle cx="350" cy="350" r="100" fill="none" stroke="#FF8225" strokeWidth="20" />
        </svg>
      </motion.div>
      {/* Text content */}
      <div className="relative z-10 flex flex-col md:w-1/2 items-center md:items-start text-center md:text-right px-6 max-w-2xl">
        <h1 className=" text-3xl md:text-5xl font-bold mb-8 leading-tight">
          امنح عملك القوة مع متجر <br /> إلكتروني احترافي
        </h1>
        <p className="text-md md:text-xl mb-10 leading-relaxed">
          ارتقِ بعملك الصغير إلى المستوى التالي مع موقع إلكتروني مخصص للتجارة الإلكترونية يلبي احتياجاتك.
        </p>
        <div className="flex justify-end   w-full">

        
        <div className="  flex flex-col md:flex-row gap-4 justify-end md:justify-end">
          {/* Get Started Button */}
          <Button className="bg-[#FF8225] text-white hover:bg-[#B43F3F] py-3 px-6 rounded-lg text-lg font-semibold transition duration-300">
            <FaRocket className="inline-block mr-2" />
            ابدأ الآن
          </Button>

          {/* See Pricing Button */}
          <Button className="bg-[#173B45] text-white hover:bg-[#B43F3F] py-3 px-6 rounded-lg text-lg font-semibold transition duration-300">
            الأسعار
          </Button>
        </div></div>
      </div>
      {/* Image on the left side */}
      <div className="relative hidden md:flex md:w-1/2 justify-center items-center">
        <Image 
          src="/assets/hero.jpg" // Replace with your image path
          alt="Hero Image"
          width={500} // Adjust as needed
          height={500} // Adjust as needed
          className="object-cover rounded-lg shadow-lg"
        />
      </div>


    </section>
  );
};

export default Hero;
