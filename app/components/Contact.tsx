"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black text-gray-200 overflow-hidden border-t border-neutral-800">
      
      {/* Subtle tech grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Orange glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#ff7b00]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reach out to VyomGarud for collaborations, inquiries, or demo requests. Our team is ready to assist with mission-critical UAV solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <p className="hover:text-[#ff7b00] transition cursor-pointer">contact@vyomgarud.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Phone</h3>
              <p className="hover:text-[#ff7b00] transition cursor-pointer">+91 8881444693</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Address</h3>
              <p className="text-gray-400">VyomGarud Headquarters, Bengaluru, India</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/70 border border-neutral-800 text-white focus:outline-none focus:border-[#ff7b00] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/70 border border-neutral-800 text-white focus:outline-none focus:border-[#ff7b00] transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/70 border border-neutral-800 text-white focus:outline-none focus:border-[#ff7b00] transition resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#ff7b00] text-black font-semibold rounded-xl hover:bg-orange-500 transition shadow-[0_0_15px_rgba(255,123,0,0.4)] hover:shadow-[0_0_25px_rgba(255,123,0,0.6)]"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
