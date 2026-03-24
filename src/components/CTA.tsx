"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplet } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-40 overflow-hidden bg-gradient-to-br from-[var(--aqua-warm)] to-[var(--aqua)]">
       {/* Background noise and depth */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 transform -rotate-12 scale-150"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center text-black">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="w-20 h-20 bg-black text-[var(--aqua)] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl skew-x-12"
        >
          <Droplet className="w-10 h-10 -skew-x-12" />
        </motion.div>

        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-black"
        >
          Drink the Future. <br />
          Experience SVRR.
        </motion.h2>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-2xl font-medium text-black/70 mb-12 max-w-2xl mx-auto"
        >
          Stop compromising on your health. Start with a free lab-grade water analysis today.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={() => window.location.href = "mailto:contact@svrwatersystems.com"}
            className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
          >
             Get Free Water Analysis <ArrowRight className="w-5 h-5"/>
          </button>
        </motion.div>

        <p className="mt-12 text-black/50 text-sm font-semibold tracking-widest uppercase">
          Or Chat with AquaBot directly →
        </p>
      </div>
    </section>
  );
}
