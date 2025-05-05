'use client'
import { Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="flex justify-between border-t border-[rgba(250,250,250,0.2)] text-white p-8">
      <motion.div 
        className="flex gap-4 items-center"
        initial={{ opacity: 0 }} // Start with opacity 0
        animate={{ opacity: 1 }} // Animate to opacity 1
        transition={{ duration: 1 }} // Duration of the animation
      >
        <h2 className="text-lg font-bold">FlashGenius</h2>
        <p className="text-sm text-[#9DA0AE]">
          &copy; {new Date().getFullYear()} FlashGenius. All rights reserved.
        </p>
      </motion.div>
      <Github
        size={24}
        className="text-[#9DA0AE] hover:text-[#FAFAFA] transition-colors duration-100 ease-in-out cursor-pointer"
      />
    </footer>
  );
}

