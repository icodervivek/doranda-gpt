"use client";

import React from "react";
import FeatureCards from "./FeatureCards";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative isolation-isolate overflow-hidden min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white"
      style={{
        background: "linear-gradient(40deg, #111111, #1a1a1a, #1e1e1e)", // darker, dim gradient
      }}
    >
      {/* Floating Glow Orbs (very dim) */}
      <div
        className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(140px)",
        }}
      ></div>
      <div
        className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(120px)",
        }}
      ></div>

      {/* Glass Content Box */}
      <motion.div
        className="max-w-3xl text-center mb-16 px-8 py-10 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Let&apos;s{" "}
          <span className="text-orange-400 drop-shadow-md">Chit</span> &{" "}
          <span className="text-orange-400 drop-shadow-md">Chat</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Whether you want to learn, brainstorm, or simply have a fun
          conversation, DorandaGPT makes every interaction feel natural,
          engaging, and almost human.
        </motion.p>
      </motion.div>

      {/* Feature Cards with Animation */}
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9 }}
      >
        <FeatureCards />
      </motion.div>
    </section>
  );
};

export default HeroSection;
