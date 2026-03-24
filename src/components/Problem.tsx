"use client";

import { motion } from "framer-motion";
import { AlertCircle, FileX2, FlaskConical } from "lucide-react";

export default function Problem() {
  const hazards = [
    { icon: <FlaskConical className="w-6 h-6" />, title: "Heavy Metals", desc: "Mercury, Lead & Arsenic" },
    { icon: <AlertCircle className="w-6 h-6" />, title: "Microplastics", desc: "Invisible particles" },
    { icon: <FileX2 className="w-6 h-6" />, title: "Bacteria & Viruses", desc: "Unseen pathogens" },
  ];

  return (
    <section className="relative w-full py-32 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 top-0 h-64 bg-gradient-to-b from-black to-[#0a0a0a]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-8"
          >
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-xs font-semibold tracking-widest text-red-300 uppercase">The Hidden Danger</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8"
          >
            The water you trust <br className="hidden md:block" />
            might be <span className="text-red-500">failing you.</span>
          </motion.h2>

          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-xl text-white/50 mb-16 max-w-2xl mx-auto"
          >
             India struggles with water purity. Standard filters are no longer enough for modern industrial and biological contaminants.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {hazards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="liquid-card p-8 border border-red-500/10 hover:border-red-500/30 hover:shadow-[0_8px_32px_rgba(239,68,68,0.1)] group"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/40">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
