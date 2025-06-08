import { usePathname } from "next/navigation"
import { motion } from "framer-motion";
import {X} from "lucide-react";

export default function MobileSideBar({open, setOpen}: {open: boolean, setOpen: (open: boolean) => void}) {
  return (
    <>
      <motion.div
        className={`fixed top-0 right-0 w-full h-full bg-[#0a0a0a]/80 z-50 ${open ? "block" : "hidden"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen(false)}
      />

      <motion.div
        className={`fixed top-0 right-0 w-[250px] h-full bg-[#1E1E1E] border-l border-[rgba(250,250,250,0.2)] z-50 p-4 ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white font-bold text-xl">FlashGenius</h2>
          <button onClick={() => setOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>
        <ul className="space-y-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/Features" className="text-white hover:text-gray-300">Features</a>
          </li>
        </ul>
      </motion.div>
    </>
  )
}
