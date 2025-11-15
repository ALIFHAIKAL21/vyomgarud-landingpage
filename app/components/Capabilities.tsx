"use client";
import { motion } from "framer-motion";

const products = [
    {
        title: "VX-1 Tactical Recon UAV",
        desc: "A long-endurance reconnaissance UAV engineered for ISR missions with encrypted command links, autonomous route planning, and high-stability flight architecture.",
        img: "/uav-1.jpg",
    },
    {
        title: "VX-NightHawk EO/IR Suite",
        desc: "Advanced day–night surveillance payload featuring thermal imaging, multi-spectrum sensors, and multi-target tracking for mission-critical operations.",
        img: "/eo-ir.jpg",
        },
    {
        title: "VX-Command Ground Station",
        desc: "Defense-grade mission control system with secure telemetry, tactical mapping, real-time diagnostics, and AI-assisted mission planning.",
        img: "/ground-station.jpg",
    },
    {
        title: "VX-Aegis AI Target Engine",
        desc: "Onboard AI engine providing live threat detection, terrain intelligence, autonomous evasion, and flight optimization for hostile environments.",
        img: "/ai-engine.jpg",
    },
];

export default function Capabilities() {
    return (
        <section
            id="capabilities"
            className="py-28 bg-black text-white relative overflow-hidden border-t border-neutral-900"
        >

            {/*  Subtle Tech Grid  */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

            {/*  Soft orange glow circle  */}
            <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px]
                            -translate-x-1/2 -translate-y-1/2 
                            bg-[#ff7b00]/10 rounded-full blur-3xl pointer-events-none" />

            {/*  Radial vignette  */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at center, #141414 0%, transparent 70%)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative">
                <p className="text-center text-xs uppercase tracking-[0.25em] text-[#ff7b00]/80 mb-2">
                    Capabilities
                </p>

                <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
                    Mission-Ready UAV Solutions
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: idx * 0.12 }}
                            viewport={{ once: true }}
                            className="group relative bg-neutral-900/60 border border-neutral-800
                         rounded-2xl overflow-hidden transition-all duration-300
                         hover:border-[#ff7b00] hover:bg-neutral-900
                         hover:-translate-y-1 hover:shadow-[0_0_25px_-8px_#ff7b00]"
                        >

                            {/* IMAGE HEADER */}
                            <div className="relative h-40 w-full overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="object-cover w-full h-full opacity-90 
                             group-hover:opacity-100 transition duration-500"
                                />

                                {/* subtle gradient overlay */}
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50" />
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-3 tracking-wide 
                               group-hover:text-[#ff7b00] transition">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
