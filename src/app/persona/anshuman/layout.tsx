import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
  title: "Anshuman Mishra | Assistant Professor & Author | DorandaGPT",
  description:
    "Anshuman Mishra is an Assistant Professor and author at Doranda College, MCA Department. Explore his AI persona on DorandaGPT to learn, brainstorm, and interact in a natural, engaging way.",
  keywords: [
    "Anshuman Mishra",
    "Doranda College",
    "MCA Department",
    "Assistant Professor",
    "Author",
    "DorandaGPT",
    "AI Persona",
    "Virtual Professor",
  ],
  authors: [{ name: "Vivek Pramanik" }],
};

export default function RootLayout({
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
