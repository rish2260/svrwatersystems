"use client";

import { motion } from "framer-motion";
import { Droplets, ArrowRight } from "lucide-react";
import RobotCharacter from "./RobotCharacter";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
      {/* Background Liquid Gradient Effect */}
      <div className="absolute inset-0 bg-black pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,184,212,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_50%)]"></div>
      </div>

      {/* Left side: Text Content */}
      <div className="relative z-10 w-full md:w-1/2 px-6 lg:pl-24 text-center md:text-left mt-24 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--aqua)]/30 bg-[var(--aqua)]/5 mb-8 backdrop-blur-md"
        >
          <Droplets className="w-4 h-4 text-[var(--aqua)]" />
          <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">India&apos;s Smart Tech</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tight mb-6"
        >
          From <span className="text-white/40">Source</span> to <br className="hidden md:block"/> <span className="text-gradient-aqua">Purity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-white/70 font-light max-w-2xl mb-12"
        >
          We don&apos;t just sell machines. <br />
          <span className="font-semibold text-white">We engineer every drop.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-6"
        >
          <button 
            onClick={() => document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--aqua-warm)] to-[var(--aqua)] text-black font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-shadow duration-300 flex items-center gap-2 group"
          >
            Explore Systems
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-lg backdrop-blur-md transition-colors duration-300"
          >
            Check Water Quality
          </button>
        </motion.div>
      </div>

      {/* Right side: 3D Robot Character */}
      <div className="relative z-10 w-full md:w-1/2 h-[50vh] md:h-full mt-12 md:mt-0 flex items-center justify-center">
         <RobotCharacter />
      </div>

      {/* Flowing bottom edge */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
