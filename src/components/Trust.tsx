"use client";

import { motion } from "framer-motion";
import { Award, Shield, Droplet } from "lucide-react";

export default function Trust() {
  const stats = [
    { value: "15M+", label: "Liters Purified", icon: <Droplet className="w-6 h-6"/> },
    { value: "ISO 9001", label: "Certified Labs", icon: <Award className="w-6 h-6"/> },
    { value: "99.9%", label: "Toxin Removal", icon: <Shield className="w-6 h-6"/> },
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Certified by Science. Trusted by India.</h2>
          <p className="text-white/50">Our lab-tested metrics define real engineering</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-8 bg-black border border-white/10 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 text-white scale-150 rotate-12 transition-transform group-hover:rotate-0">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-black text-gradient-aqua mb-2">{stat.value}</h3>
              <p className="text-white/60 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-16">
          <p className="text-center text-xs text-white/40 uppercase tracking-widest mb-8">Trusted Partners & Tech</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Minimal SVG Logos or text representations */}
            <h4 className="font-black text-xl hover:text-[var(--aqua)] transition-colors">RO+UV-Tech™</h4>
            <h4 className="font-black text-xl hover:text-[var(--aqua)] transition-colors">NanoFilter®</h4>
            <h4 className="font-black text-xl hover:text-[var(--aqua)] transition-colors">SmartIoT Labs</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
