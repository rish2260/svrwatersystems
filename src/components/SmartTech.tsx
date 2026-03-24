"use client";

import { motion } from "framer-motion";
import { Wifi, Smartphone, BatteryCharging, CloudCog } from "lucide-react";

export default function SmartTech() {
  const features = [
    { icon: <Smartphone/>, title: "SVRR App Sync", desc: "Monitor filter life and purity logs directly from your phone." },
    { icon: <CloudCog/>, title: "Proactive Diagnostics", desc: "System auto-generates a service ticket before you even notice an issue." },
    { icon: <BatteryCharging/>, title: "Eco-Power Mode", desc: "Reduces power draw by 40% during non-peak usage hours." },
    { icon: <Wifi/>, title: "Over-Air Updates", desc: "Continuous improvement of purification algorithms remotely." },
  ];

  return (
    <section id="smarttech" className="py-32 bg-[#000000] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="flex-1">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6 sticky top-0">
              <Wifi className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">IoT Enabled</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              The <span className="text-blue-400">Future-Ready</span> <br/> Engine
            </h2>
            <p className="text-white/60 text-lg mb-8">
              A purifier shouldn&apos;t be a black box. SVRR integrates deep sensor nodes that communicate health, TDS levels, and pressure stats in real time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 liquid-card hover:bg-white/5"
                >
                  <div className="text-blue-400 mb-4">{f.icon}</div>
                  <h4 className="font-semibold mb-2">{f.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            {/* Visual Phone / Dashboard mockup */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative h-[600px] w-full max-w-sm mx-auto bg-gradient-to-br from-[#111] to-black rounded-[50px] border-[8px] border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] overflow-hidden flex flex-col"
            >
               {/* UI within the mock phone */}
               <div className="p-8 pt-12 flex-1 relative flex flex-col">
                 <div className="flex justify-between items-center mb-12">
                   <h3 className="font-bold text-lg">SVRR Dashboard</h3>
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                 </div>

                 <div className="text-center mb-8">
                   <h1 className="text-6xl font-black text-blue-400">18</h1>
                   <p className="text-white/50 uppercase tracking-wider text-sm font-semibold">Live TDS (PPM)</p>
                 </div>

                 <div className="space-y-4">
                   <div className="h-16 rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-between">
                     <span className="text-white/70 font-medium">Filter Health</span>
                     <span className="text-green-400 font-bold">92%</span>
                   </div>
                   <div className="h-16 rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-between">
                     <span className="text-white/70 font-medium">Daily Usage</span>
                     <span className="text-white font-bold">6.4 L</span>
                   </div>
                 </div>

                 {/* Liquid bottom wave inside phone */}
                 <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
               </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
