"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Calculator as CalcIcon } from "lucide-react";

export default function Calculator() {
  const [step, setStep] = useState(1);

  return (
    <section id="calculator" className="relative py-32 bg-[#0a0a0a]">
      {/* Decorative Top wave logic */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000] to-[#0a0a0a] h-64 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8"
          >
            <CalcIcon className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold tracking-widest text-purple-300 uppercase">Interactive Algorithm</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Find Your <span className="text-purple-400">Exact Matrix.</span>
          </h2>
          <p className="text-white/60 text-lg">
            Don&apos;t guess your system. Enter your parameters to see which SVRR configuration matches your chemical profile.
          </p>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-xl mx-auto liquid-card p-8 border border-white/10"
        >
          {step === 1 && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
               <h3 className="text-xl font-bold">1. Water Source Type</h3>
               <div className="grid grid-cols-2 gap-4">
                 {["Municipal / Tap", "Borewell / Ground", "Tanker Water", "Mixed"].map((opt) => (
                   <button 
                     key={opt}
                     onClick={() => setStep(2)}
                     className="p-4 rounded-xl border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-colors text-left"
                   >
                     {opt}
                   </button>
                 ))}
               </div>
             </motion.div>
          )}

          {step === 2 && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
               <h3 className="text-xl font-bold">2. Estimated TDS Levels (If known)</h3>
               <div className="grid grid-cols-2 gap-4">
                 {["< 200 PPM (Low)", "200-500 PPM (Med)", "> 500 PPM (High)", "I Don't Know"].map((opt) => (
                   <button 
                     key={opt}
                     onClick={() => setStep(3)}
                     className="p-4 rounded-xl border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-colors text-left"
                   >
                     {opt}
                   </button>
                 ))}
               </div>
             </motion.div>
          )}

          {step === 3 && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
               <div className="text-center">
                 <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse glow-btn shadow-[0_0_30px_#9333ea]">
                   <CalcIcon className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-black text-white mb-2">Analyzing Matrix...</h3>
                 <p className="text-white/50 mb-8">Matching hardware to your water chemistry.</p>

                 <div className="p-6 bg-white/5 border border-purple-400/20 rounded-2xl">
                    <h4 className="font-bold text-lg text-purple-300">SVRR Nexus Pro</h4>
                    <p className="text-sm text-white/50 mb-4 mt-2">Recommended for high-TDS Borewell setups requiring intense RO scrubbing.</p>
                    <button 
                      onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                      className="w-full bg-purple-500 hover:bg-purple-400 text-black font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                       Request Final Quote <ArrowRight className="w-5 h-5"/>
                    </button>
                 </div>
                 
                 <button onClick={() => setStep(1)} className="mt-8 text-white/40 text-sm hover:text-white transition-colors underline decoration-white/20">Recalculate</button>
               </div>
             </motion.div>
          )}

          {/* Progress bar */}
          <div className="mt-8 flex gap-2 justify-center">
            <div className={`h-1.5 w-1/3 rounded-full transition-colors ${step >= 1 ? 'bg-purple-500' : 'bg-white/10'}`}></div>
            <div className={`h-1.5 w-1/3 rounded-full transition-colors ${step >= 2 ? 'bg-purple-500' : 'bg-white/10'}`}></div>
            <div className={`h-1.5 w-1/3 rounded-full transition-colors ${step >= 3 ? 'bg-purple-500' : 'bg-white/10'}`}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
