import Image from "next/image";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();

  const pathLinkColor = (path: string, baseClass = "") => {
    return `${pathname === path ? "text-[#FAFAFA]" : "text-[#9DA0AE] hover:text-[#FAFAFA] transition-colors duration-100 ease-in-out"} ${baseClass}`;
  };
  return (
    <>
      <div className="flex border-b border-[rgba(250,250,250,0.2)] justify-between items-center px-6 py-4"> {/* mx instead of px? which better to look at? */}
        <h1 className="font-bold text-xl cursor-pointer ">
          <a href="/" className="text-[#FAFAFA] hover:text-[#FAFAFA]/80 transition-colors duration-100 ease-in-out">FlashGenius</a>
        </h1>

        <ul className="flex gap-10 text-sm">
          <li className={pathLinkColor("/")}>
            <a href="/">Home</a>
          </li>
          <li>
            {/* <a href="/features"> */}
            <a href="/" className={pathLinkColor("/features")}>
              Features
            </a>
          </li>
        </ul>

        <div className="flex items-centerg gap-4">
          <div className="border border-[rgba(250,250,250,0.2)] rounded-lg p-2 cursor-pointer hover:bg-[#FAFAFA]/5">
            <Moon size={20} color="#0091FF" />
          </div>

          <Button className="bg-[#0a0a0a]  hover:bg-[#FAFAFA] hover:text-[#0a0a0a] cursor-pointer transition-colors duration-200 ease-in-out">
            Sign in
          </Button>

          <Button className="bg-[#FAFAFA] text-[#0a0a0a] hover:bg-[#FAFAFA]/80  cursor-pointer transition-colors duration-200 ease-in-out">
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
}
