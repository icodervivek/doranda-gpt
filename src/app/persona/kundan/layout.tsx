import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
  title: "Kundan Kumar | Assistant Professor & Tech Enthusiast | DorandaGPT",
  description:
    "Kundan Kumar is an Assistant Professor and tech enthusiast at Doranda College, MCA Department. Known for his friendly teaching style, he ensures students truly understand the concepts. Explore his AI persona on DorandaGPT.",
  keywords: [
    "Kundan Kumar",
    "Doranda College",
    "MCA Department",
    "Assistant Professor",
    "Tech Enthusiast",
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
      <div className="pt-10 sm:pt-20">{children}</div>
      <Footer />
    </>
  );
}
