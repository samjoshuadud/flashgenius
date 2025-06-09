import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function MobileSideBar({
  open,
  setOpen,
  pathName,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  pathName: string;
}) {
  const pathLinkBgColor = (path: string) => {
    return `${pathName === path ? "bg-[#FAFAFA] text-black hover:bg-[#FAFAFA]/40" : "hover:bg-[#FAFAFA]/10"} transition-colors duration-200 ease-in-out px-4`;
  };
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
        className={`fixed top-0 right-0 w-[280px] max-w-[270px] h-full bg-[#0a0a0a] border-l border-[rgba(250,250,250,0.2)] z-50 p-5 ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300  `}
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white font-bold text-xl pt-2">FlashGenius</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-white cursor-pointer hover:text-gray-300 transition-colors duration-200"
          >
            <X size={16} />
          </button>
        </div>
        <ul className="space-y-4 mt-10 border-b border-[rgba(250,250,250,0.2)] pb-4">
          <li
            className={`p-2 rounded-md ${pathLinkBgColor("/")} cursor-pointer`}
          >
            <a href="/">Home</a>
          </li>
          <li
            className={`p-2 rounded-md ${pathLinkBgColor("/Features")} cursor-pointer`}
          >
            <a href="/Features">Features</a>
          </li>
        </ul>
        <div className="mt-6 space-y-4">
        <motion.div
          whileHover={{
            scale: 1.1, // Slight zoom-in effect on hover
            rotate: 5, // Small rotate on hover for dynamic interaction
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
          <Button className="w-full bg-[#0a0a0a] hover:bg-[#FAFAFA] hover:text-[#0a0a0a] cursor-pointer transition-colors duration-200 ease-in-out ">
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
          <Button className="w-full bg-[#FAFAFA] text-[#0a0a0a] hover:bg-[#FAFAFA]/80 cursor-pointer transition-colors duration-200 ease-in-out">
            Sign up
          </Button>
        </motion.div>
        </div>
      </motion.div> 
    </>
  );
}
