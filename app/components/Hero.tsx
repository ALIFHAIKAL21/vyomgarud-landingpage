"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/hero-drone.jpg",
    "/hero-drone-2.jpg",
    "/hero-drone-3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Slideshow */}
      {images.map((src, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
          animate={{ opacity: index === i ? 0.75 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}

      {/* Overlay Darkness */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Orange Glow */}
      <div className="absolute top-1/4 sm:top-1/3 right-1/4 sm:right-1/3 w-[350px] sm:w-[450px] md:w-[550px] h-[350px] sm:h-[450px] md:h-[550px] bg-[#ff7b00] opacity-[0.07] blur-[120px] sm:blur-[150px] md:blur-[180px]" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl px-4 sm:px-6"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4 }}
          className="uppercase tracking-[0.35em] text-xs sm:text-sm md:text-base text-gray-300"
        >
          Autonomous UAV Intelligence
        </motion.p>

        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
          VyomGarud
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Engineering next-generation UAVs built with combat-ready precision,
          encrypted communication, and AI-driven autonomy for tactical and industrial missions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#capabilities"
            className="px-6 sm:px-7 md:px-8 py-2 sm:py-3 rounded-lg font-semibold bg-[#ff7b00] text-black hover:bg-orange-500 transition-all shadow-[0_0_15px_rgba(255,123,0,0.4)] hover:shadow-[0_0_25px_rgba(255,123,0,0.6)]"
          >
            Explore Capabilities
          </a>

          <a
            href="#contact"
            className="px-6 sm:px-7 md:px-8 py-2 sm:py-3 rounded-lg font-semibold border border-gray-500 text-gray-200 hover:border-[#ff7b00] hover:text-[#ff7b00] transition-all"
          >
            Contact Team
          </a>
        </div>
      </motion.div>

      {/* Fade to About */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
