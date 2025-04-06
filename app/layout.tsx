import type { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google';
import Header from "@/app/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FlashGenius",
  description: "Flasgenius is a flashcard app that helps you learn faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
