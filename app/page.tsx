"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight, Brain, BookOpen, Upload } from "lucide-react";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Home() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  const features = [
    {
      icon: <Upload size={27} className="text-[#FAFAFA]" />,
      title: "PDF Upload & AI Generation",
      description:
        "Upload any PDF and let our AI generate perfect flashcards. Set the number of cards and let the magic happen.",
    },
    {
      icon: <BookOpen size={27} className="text-[#FAFAFA] " />,
      title: "Custom Flashcards",
      description:
        "Create your own flashcards manually. Organize them into decks for different subjects or topics.",
    },
    {
      icon: <Brain size={27} className="text-[#FAFAFA]" />,
      title: "Quiz Generation",
      description:
        "Test your knowledge with auto-generated quizzes based on your flashcards. Track your progress over time.",
    },
  ];

  const instructions = [
    {
      title: "Upload Content",
      description:
        "Upload your PDF study materials or create flashcards manually.",
    },
    {
      title: "Generate Flashcards",
      description:
        "Our AI analyzes your content and creates perfect question-answer pairs.",
    },
    {
      title: "Study & Quiz",
      description:
        "Use our quizzes to test your knowledge and track your progress.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col">
        <div className="bg-gradient-to-b from-[#09090B] to-[#1E1E20]">
          <div className="grid grid-cols-2 py-20  mx-auto max-w-7xl place-items-center ">
            <div className="flex flex-col gap-10">
              <motion.h1
                className="text-7xl font-bold"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                Transform your learning with AI-powered flashcards
              </motion.h1>

              <motion.p
                className="text-[#9DA0AE] text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Upload PDFs, generate flashcards, and quiz yourself to master
                any subject. FlashGenius makes studying smarter, not harder.
              </motion.p>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Button className="bg-[#FAFAFA] text-[#0a0a0a] hover:bg-[#FAFAFA]/80 cursor-pointer transition-colors duration-200 ease-in-out py-5 px-6">
                  Get started
                  <MoveRight size={10} className="ml-2" />
                </Button>
                <Button className="bg-[#0a0a0a] hover:bg-[#FAFAFA] hover:text-[#0a0a0a] cursor-pointer transition-colors duration-200 ease-in-out py-5 px-6">
                  Sign in
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Image
                src="/Hero.png"
                className="flip-animation"
                alt="Hero Image"
                width={287}
                height={365}
              />
            </motion.div>
          </div>
        </div>
        {/* Features Section */}
        <div className="flex flex-col gap-10 py-26 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-5xl font-bold text-center mb-5">
              Powerful Features for Effective Learning
            </h1>
            <p className="text-[#9DA0AE] text-center ">
              FlashGenius combines AI technology with proven study methods to
              help you learn faster and retain more.
            </p>
          </motion.div>

          {/*Features Cards*/}
          <div className="flex gap-8">
            {features.map((features, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-3 border border-[#252636] rounded-md max-w-78 p-6"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                custom={i}
              >
                <div className="bg-[#FAFAFA]/20 rounded-full w-12 h-12 p-3 flex justify-center items-center">
                  {features.icon}
                </div>
                <h2 className="font-semibold text-lg">{features.title}</h2>
                <p className="text-[#9DA0AE]">{features.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Instruction */}
        <div className="flex flex-col gap-16 py-22 items-center bg-[#1E1E20]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-5xl font-bold text-center mb-5">
              How FlashGenius Works
            </h1>
            <p className="text-[#9DA0AE] text-center ">
              Our simple process makes learning efficient and effective.
            </p>
          </motion.div>

          {/*Instructions Cards*/}
          <div className="flex gap-8">
            {instructions.map((instructions, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-3 max-w-96 p-6 items-center justify-center"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                custom={i}
              >
                <div className="bg-[#D9D9D9] rounded-full w-15 h-15 p-3 flex justify-center items-center">
                  <span className="text-[#0a0a0a] font-semibold text-lg">
                    {i + 1}
                  </span>
                </div>
                <h2 className="font-semibold text-lg">{instructions.title}</h2>
                <p className="text-[#9DA0AE] text-center">
                  {instructions.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-[#0a0a0a] py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="bg-[#FAFAFA] max-w-7xl mx-auto rounded-lg p-4"
          >
            <div className="flex justify-between items-center px-10">
              <div className="flex flex-col gap-10 py-16">
                <h1 className="text-5xl text-[#0a0a0a] font-bold text-center mb-5">
                  Ready to Transform Learning?
                </h1>
                <p className="text-[#9DA0AE] ">
                  Join thousands of students who are already studying smarter
                  with FlashGenius.
                </p>
              </div>
              <Button className="bg-[#0a0a0a] hover:bg-[#FAFAFA] hover:text-[#0a0a0a] cursor-pointer transition-colors duration-200 ease-in-out py-5 px-6">
                Create Free Account
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
