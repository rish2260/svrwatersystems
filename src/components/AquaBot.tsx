"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Bot, MessageCircle, X } from "lucide-react";

export default function AquaBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [greeting, setGreeting] = useState("Hi! I'm AquaBot.");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500 && scrollY < 1500) {
        setGreeting("Let me show you how it works.");
      } else if (scrollY > 2500) {
        setGreeting("Need help choosing a product?");
      } else {
        setGreeting("Hi! I'm AquaBot.");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        key={greeting}
        className="mb-4 bg-[#0a0a0a]/90 backdrop-blur-md border border-[var(--aqua)]/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(0,229,255,0.1)] pointer-events-auto liquid-card"
        style={{ maxWidth: "250px" }}
      >
        <p className="text-sm font-medium text-white">{greeting}</p>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-[#0a0a0a] border-r border-b border-[var(--aqua)]/30 transform rotate-45"></div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-16 h-16 rounded-full bg-gradient-to-tr from-[var(--aqua-warm)] to-[var(--aqua)] flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.4)] pointer-events-auto border border-white/20 glow-btn overflow-hidden"
      >
        {/* Inner liquid effect */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? (
          <X className="w-8 h-8 text-black" />
        ) : (
          <Bot className="w-8 h-8 text-black" />
        )}
      </motion.button>
      
      {/* Expanded view */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute bottom-24 right-0 w-[300px] h-[400px] liquid-card flex flex-col pointer-events-auto overflow-hidden bg-black/95 border border-[var(--aqua)]/30"
        >
          <div className="p-4 border-b border-white/10 bg-gradient-to-r from-[var(--aqua-warm)]/20 to-[var(--aqua)]/10">
            <h3 className="font-semibold flex items-center gap-2">
              <Bot className="w-5 h-5 text-[var(--aqua)]" /> AquaBot Assistant
            </h3>
            <p className="text-xs text-white/60">Your Digital Guide</p>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-white/5 rounded-xl p-3 text-sm text-white/80 border border-white/5 mb-3">
              How can I assist you with your water purification needs today?
            </div>
            <button 
              onClick={() => {
                document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="w-full text-left bg-[var(--aqua)]/10 text-[var(--aqua)] border border-[var(--aqua)]/30 rounded-lg p-2 text-sm mb-2 hover:bg-[var(--aqua)]/20 transition-colors"
            >
              I need a home system
            </button>
            <button 
              onClick={() => {
                document.getElementById("smarttech")?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="w-full text-left bg-[var(--aqua)]/10 text-[var(--aqua)] border border-[var(--aqua)]/30 rounded-lg p-2 text-sm hover:bg-[var(--aqua)]/20 transition-colors"
            >
              Tell me about IoT features
            </button>
          </div>
          <div className="p-3 border-t border-white/10">
            <div className="flex bg-white/5 rounded-full px-3 py-2 border border-white/10 focus-within:border-[var(--aqua)]/50 transition-colors">
              <input type="text" placeholder="Ask anything..." className="bg-transparent text-sm w-full outline-none" />
              <MessageCircle className="w-4 h-4 text-white/40" />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
