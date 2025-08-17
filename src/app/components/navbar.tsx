"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
   <nav className="bg-transparent backdrop-blur-md text-white fixed w-full z-50 border-b border-white/10 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-14 sm:h-20">
      {/* Logo */}
      <div className="flex-shrink-0 text-xl sm:text-3xl font-extrabold tracking-wide">
        <Link href="/" className="flex items-center justify-center">
          Doranda<span className="text-orange-400">GPT</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-base sm:text-lg font-medium">
        {["Home", "About"].map((item, idx) => (
          <Link
            key={idx}
            href={item === "Home" ? "/" : "/about"}
            className="relative group transition-colors"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none cursor-pointer transition-colors p-2 rounded-md hover:bg-white/10"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden bg-[#201f1f]/95 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out ${
      isOpen
        ? "max-h-52 opacity-100 px-6 pt-3 pb-5"
        : "max-h-0 opacity-0 px-0"
    }`}
  >
    {["Home", "About"].map((item, idx) => (
      <Link
        key={idx}
        href={item === "Home" ? "/" : "/about"}
        onClick={() => setIsOpen(false)}
        className="block py-2 text-base font-semibold hover:text-orange-400 transition-colors"
      >
        {item}
      </Link>
    ))}
  </div>
</nav>

  );
}
