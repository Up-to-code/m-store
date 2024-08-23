"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: string;
}

export default function ButtonePro({
  children,
  onClick,
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}   // Scale up the button slightly on hover
      whileTap={{ scale: 0.95 }}    // Scale down the button slightly when clicked
      transition={{ duration: 0.2, ease: "easeInOut" }} // Smooth transition for the motion effects
    >
      <Button
        onClick={onClick}
        className={`bg-gradient-to-r from-primary to-secondary ${className}`}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}
