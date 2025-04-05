"use client";

import Image from "next/image";
import Header from "@/app/components/Header";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      {/*Hero Section*/}
      <div className="flex flex-col">
        <div className="bg-gradient-to-b from-[#09090B] to-[#1E1E20]">
        <div className="grid grid-cols-2 py-20 px-8 mx-auto max-w-7xl place-items-center ">
          <div className="flex flex-col gap-6">
            <h1 className="text-7xl font-bold">
              Transform your learning with AI-powered flashcards
            </h1>
            <p className="text-[#9DA0AE] text-xl">
              Upload PDFs, generate flashcards, and quiz yourself to master any
              subject. FlashGenius makes studying smarter, not harder.
            </p>
            <div className="flex gap-4 ">
              <Button className="bg-[#FAFAFA] text-[#0a0a0a] hover:bg-[#FAFAFA]/80 cursor-pointer transition-colors duration-200 ease-in-out py-5 px-6">
                Get started
                <MoveRight size={10} className="ml-2" />
              </Button>
              <Button className="bg-[#0a0a0a] hover:bg-[#FAFAFA] hover:text-[#0a0a0a] cursor-pointer transition-colors duration-200 ease-in-out py-5 px-6">
                Sign in
              </Button>
            </div>
          </div>
          <Image src="/Hero.png" alt="Hero Image" width={287} height={365} />
        </div>
        </div>
      </div>
    </>
  );
}
