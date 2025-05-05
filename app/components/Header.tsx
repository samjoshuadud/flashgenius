'use client'

import Image from "next/image";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {motion} from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  const pathLinkColor = (path: string, baseClass = "") => {
    return `${pathname === path ? "text-[#FAFAFA]" : "text-[#9DA0AE] hover:text-[#FAFAFA] transition-colors duration-100 ease-in-out"} ${baseClass}`;
  };
  return (
   <>
      <motion.div
        className="flex border-b border-[rgba(250,250,250,0.2)] justify-between items-center px-6 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }} // Slow fade-in for header
      >
        <motion.h1
          className="font-bold text-xl cursor-pointer"
          initial={{ opacity: 0, y: -20 }} // Start from above the viewport
          animate={{ opacity: 1, y: 0 }}  // Slide in with fade-in
          transition={{ duration: 0.8 }}   // Smooth animation
        >
          <a href="/" className="text-[#FAFAFA] hover:text-[#FAFAFA]/80 transition-colors duration-100 ease-in-out">
            FlashGenius
          </a>
        </motion.h1>

        <motion.ul
          className="flex gap-10 text-sm"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, // Staggered animations for list items
                delayChildren: 0.2,    // Delay before starting list animations
              },
            },
          }}
        >
          <motion.li
            className={pathLinkColor("/")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/">Home</a>
          </motion.li>

          <motion.li
            className={pathLinkColor("/Features")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/Features">Features</a>
          </motion.li>
        </motion.ul>

        <div className="flex items-center gap-4">
          <motion.div
            className="border border-[rgba(250,250,250,0.2)] rounded-lg p-2 cursor-pointer hover:bg-[#FAFAFA]/5"
            whileHover={{ scale: 1.2 }}    // Slightly enlarge on hover
            whileTap={{ scale: 0.9 }}     // Shrink a bit when clicked
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20, // More fluid motion when scaling
            }}
          >
            <Moon size={20} color="#0091FF" />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1, // Slight zoom-in effect on hover
              rotate: 5,  // Small rotate on hover for dynamic interaction
            }}
            whileTap={{
              scale: 0.95, // Shrink when clicked
              rotate: -5, // Rotate in opposite direction for a tap effect
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Button className="bg-[#0a0a0a] hover:bg-[#FAFAFA] hover:text-[#0a0a0a] cursor-pointer transition-colors duration-200 ease-in-out">
              Sign in
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1, 
              rotate: 5,   
            }}
            whileTap={{
              scale: 0.95, 
              rotate: -5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Button className="bg-[#FAFAFA] text-[#0a0a0a] hover:bg-[#FAFAFA]/80 cursor-pointer transition-colors duration-200 ease-in-out">
              Sign up
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </>

  );
}
