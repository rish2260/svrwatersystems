"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, BrainCircuit } from "lucide-react";

export default function Solution() {
  const steps = [
    { title: "Smart Diagnostics", desc: "Automated analysis of input water", icon: <BrainCircuit/> },
    { title: "Multi-Stage Purify", desc: "Nano & Reverse Osmosis matrix", icon: <Activity/> },
    { title: "Mineral Remaster", desc: "Reintroducing vital electrolytes", icon: <ShieldCheck/> },
  ];

  return (
    <section className="relative w-full py-32 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(0,184,212,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Engineering Perfect <br />
              <span className="text-gradient-aqua">Hydration.</span>
            </h2>
            <p className="text-lg text-white/60 mb-12">
              SVRR Systems replace basic filtration with an intelligent, sensory-driven purification matrix. Our technology adapts to your source water to deliver consistent, life-giving purity.
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--aqua)]/30 transition-colors"
                >
                  <div className="p-3 bg-[var(--aqua)]/10 text-[var(--aqua)] rounded-xl">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{step.title}</h4>
                    <p className="text-white/50 text-sm mt-1">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-tr from-[rgba(26,26,26,0.8)] to-[rgba(10,10,10,0.9)] border border-[var(--aqua)]/20 rounded-[40px] shadow-[0_0_60px_rgba(0,229,255,0.05)] overflow-hidden flex items-center justify-center relative"
            >
               {/* Stand-in for real system 3D or animation */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
               <div className="relative z-10 w-64 h-64 rounded-full border border-[var(--aqua)]/30 flex items-center justify-center animate-pulse">
                 <div className="w-48 h-48 rounded-full bg-[var(--aqua)]/10 blur-xl"></div>
                 <h2 className="absolute text-xl font-bold tracking-widest text-[var(--aqua)]/80 uppercase">System Active</h2>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
