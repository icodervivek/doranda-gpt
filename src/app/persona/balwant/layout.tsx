import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
  title: "Balwant Kumar | Assistant Professor & Researcher | DorandaGPT",
  description:
    "Balwant Kumar is an Assistant Professor and dedicated researcher at Doranda College, MCA Department. Explore his AI persona on DorandaGPT for insightful, research-driven learning and guidance.",
  keywords: [
    "Balwant Kumar",
    "Doranda College",
    "MCA Department",
    "Assistant Professor",
    "Researcher",
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
