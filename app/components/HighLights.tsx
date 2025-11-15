"use client";
import { motion } from "framer-motion";
import { Target, Radio, CloudSun } from "lucide-react";

const highlights = [
  { value: "+120 km", label: "Extended Operational Range", icon: Target },
  { value: "AI-Driven", label: "Autonomous Flight Engine", icon: Radio },
  { value: "24/7", label: "All-Weather Deployment", icon: CloudSun },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative py-32 lg:py-36 bg-neutral-950 text-white overflow-hidden border-t border-neutral-800"
    >
      {/* Subtle Tech Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Soft Orange Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] sm:w-[800px] md:w-[900px] h-[700px] sm:h-[800px] md:h-[900px] -translate-x-1/2 -translate-y-1/2 bg-[#ff7b00]/10 rounded-full blur-4xl" />

      {/* Highlights Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-20 text-center relative z-10">
        {highlights.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group relative px-4"
            >
              {/* ICON */}
              <Icon className="w-14 h-14 md:w-16 md:h-16 mb-6 text-[#ff7b00] opacity-80 group-hover:opacity-100 transition-all duration-300" />

              {/* MAIN NUMBER */}
              <h3 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-[#ff7b00] tracking-tight drop-shadow-[0_0_15px_rgba(255,123,0,0.3)] group-hover:scale-105 transition-transform duration-300">
                {item.value}
              </h3>

              {/* LABEL */}
              <p className="mt-3 text-gray-300 text-base md:text-lg group-hover:text-gray-200 transition-colors duration-300">
                {item.label}
              </p>

              {/* Vertical Divider for desktop */}
              {i < highlights.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-linear-to-b from-transparent via-[#ff7b00]/40 to-transparent" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
