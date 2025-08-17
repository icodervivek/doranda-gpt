import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="font-sans flex flex-col min-h-screen w-full bg-[#201f1f] text-white">
      {/* Navbar stays on top */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center relative px-4 sm:px-6 py-12 sm:py-20 lg:py-32 text-center">
        {/* Glow effect */}
        <div
          className="absolute inset-0 w-full h-full z-[-1] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(224,86,43,0.35) 0%, rgba(73,46,148,0) 70%)",
            filter: "blur(120px)",
          }}
        ></div>

        <div className="flex flex-col items-center justify-center max-w-lg">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-orange-400 animate-pulse mt-20">
            404
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mt-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base px-2">
            Looks like you wandered off the path. Don’t worry — let’s get you
            back on track.
          </p>

          {/* Home button */}
          <Link
            href="/"
            className="mt-8 inline-block w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg sm:rounded-xl shadow-lg transition transform hover:scale-105 text-base"
          >
            Go Back Home
          </Link>
        </div>
      </main>

      {/* Footer sticks at the bottom */}
      <Footer />
    </div>
  );
}
