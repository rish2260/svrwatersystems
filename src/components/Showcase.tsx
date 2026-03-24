"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Showcase() {
  const products = [
    {
      name: "SVRR Quantum-1",
      desc: "Compact RO + UV for modern kitchens",
      features: ["7-Stage Matrix", "Mineral Boost", "Zero Water Wastage"],
      imgBg: "bg-gradient-to-t from-[var(--aqua)]/10 to-transparent",
    },
    {
      name: "SVRR Nexus Pro",
      desc: "Commercial-grade purity for full homes",
      features: ["IoT Enabled", "1200L Capacity", "Auto-Diagnostics"],
      imgBg: "bg-gradient-to-t from-emerald-500/10 to-transparent",
    },
    {
      name: "SVRR Aqua-X",
      desc: "Industrial grade output, tiny footprint",
      features: ["Heavy Duty", "Stainless Body", "Smart Flow Control"],
      imgBg: "bg-gradient-to-t from-purple-500/10 to-transparent",
    },
  ];

  return (
    <section id="showcase" className="relative w-full py-32 bg-[#000000]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            The <span className="text-gradient-aqua">SVRR Fleet</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Engineered systems designed to meet exact specifications, from studio apartments to commercial complexes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="liquid-card group relative overflow-hidden"
            >
              {/* Product Placeholder */ }
              <div className={`h-64 ${product.imgBg} flex items-center justify-center p-8 transition-colors duration-500`}>
                <div className="w-32 h-48 border border-white/20 rounded-xl bg-white/5 shadow-2xl skew-y-3 group-hover:skew-y-0 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center">
                  <div className="w-2 h-20 bg-[var(--aqua)]/50 rounded-full blur-sm"></div>
                </div>
              </div>

              <div className="p-8 border-t border-white/10">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--aqua)] transition-colors">{product.name}</h3>
                <p className="text-white/50 text-sm mb-6">{product.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-[var(--aqua)]" /> {feat}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full py-3 rounded-lg border border-white/20 text-center font-semibold text-sm hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                >
                  View Specifications <ArrowUpRight className="w-4 h-4"/>
                </button>
              </div>

              {/* Hover Glow */ }
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--aqua)]/30 rounded-2xl pointer-events-none transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
