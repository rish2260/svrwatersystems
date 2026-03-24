"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    { quote: "The diagnostic system detected microscopic impurities my previous filter ignored. The taste difference is night and day.", author: "Dr. Ananya S.", title: "Medical Researcher" },
    { quote: "Replaced our industrial plant setup with a compact Aqua-X array. Space saved, efficiency up 40%. Brilliant engineering.", author: "Karthik Menon", title: "Facilities Director" },
    { quote: "It doesn't just filter water; the app tells me exactly when maintenance is due before it breaks. True peace of mind.", author: "Rohan V.", title: "Smart Home Enthusiast" },
  ];

  return (
    <section className="py-32 bg-[#000000] border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black mb-16 text-center">
          Verified <span className="text-white/40">Results.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {reviews.map((rev, i) => (
             <motion.div 
               key={rev.author}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-8 bg-black/50 border border-white/5 rounded-3xl hover:border-white/20 transition-colors"
             >
                <Quote className="w-8 h-8 text-[var(--aqua)]/30 mb-6" />
                <p className="text-lg text-white/80 leading-relaxed mb-8 italic">
                   &quot;{rev.quote}&quot;
                </p>
                <div className="mt-auto">
                   <h6 className="font-bold">{rev.author}</h6>
                   <p className="text-sm text-[var(--aqua)]">{rev.title}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
