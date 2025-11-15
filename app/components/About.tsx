"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
  <motion.section
  id="about"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="relative py-24 bg-[#0b0b0b] text-gray-200 overflow-hidden"
>

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* SOFT ORANGE GLOW */}
      <div className="absolute right-[-200px] top-1/3 w-[600px] h-[600px] bg-[#ff7b00]/10 blur-3xl rounded-full opacity-60 z-0" />

      {/* IMAGE DESKTOP */}
   <motion.img
  src="/uav-bg.png"
  alt="UAV"
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="
    hidden lg:block absolute top-[42%] right-0
    translate-x-1/4 -translate-y-1/4
    w-[80%] max-w-none object-contain z-0
  "
/>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* MOBILE/TABLET IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full flex justify-center lg:hidden mb-10"
          >
            <img
              src="/uav-bg.png"
              alt="UAV"
              className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl object-contain"
            />
          </motion.div>

          {/* CONTENT */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                 <p className=" text-xs uppercase tracking-[0.25em] text-[#ff7b00]/80 mb-2">
                    About Us
                </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
                Engineering the Future of Autonomous Aerial Systems
              </h2>

              <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                VyomGarud specializes in next-generation UAV platforms designed
                for high-reliability missions across defense, surveillance,
                emergency response, and industrial automation.
              </p>

             
            </motion.div>

            {/* CARDS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2  gap-6"
            >
              {/* CARD 1 */}
              <div className="p-6 rounded-xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-sm hover:bg-neutral-900 transition">
                <h3 className="text-lg font-semibold mb-2">Mission-Focused Engineering</h3>
                <p className="text-gray-400 text-sm">
                  Engineered for deployments where uptime and resilience define mission success.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="p-6 rounded-xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-sm hover:bg-neutral-900 transition">
                <h3 className="text-lg font-semibold mb-2">Secure & Connected</h3>
                <p className="text-gray-400 text-sm">
                  Hybrid encrypted communication systems with long-range multi-channel connectivity.
                </p>
              </div>

             

            
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
