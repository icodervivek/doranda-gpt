import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
  title: "About | Chit Chat - AI Persona",
  description:
    "Learn more about Chit Chat Persona – an AI-powered virtual companion designed for natural, engaging conversations in the style of Hitesh Choudhary and Piyush Garg. Discover its features, purpose, and the minds behind it.",
  keywords: [
    "About Chit Chat",
    "AI Persona",
    "Hitesh Choudhary",
    "Piyush Garg",
    "AI Chatbot",
    "Virtual Assistant",
    "AI Conversations",
  ],
  authors: [{ name: "Vivek Pramanik" }],
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
