import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DorandaGPT",
  description:
    "DorandaGPT is an AI-powered virtual companion designed for natural, engaging conversations in the style of Anshuman Mishra, Balwant Kumar and Kundan Kumar. Talk, brainstorm, and have fun with an AI that feels human-like.",
  keywords: [
    "Doranda College",
    "MCA Department",
    "AI Persona",
    "AI Conversations",
    "Next.js AI App",
    "OpenAI",
  ],
  authors: [{ name: "Vivek Pramanik" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-new-gr-c-s-check-loaded="14.1248.0"
        data-gr-ext-installed=""
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
