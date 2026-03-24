"use client";

import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Showcase from "@/components/Showcase";
import Trust from "@/components/Trust";
import SmartTech from "@/components/SmartTech";
import Calculator from "@/components/Calculator";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import AquaBot from "@/components/AquaBot";

export default function Home() {
  // Smooth scrolling via lenis or similar could be added here later
  return (
    <main className="relative bg-[#000000] text-white overflow-hidden selection:bg-[var(--aqua)] selection:text-black">
      {/* AquaBot is the digital sales assistant that stays on screen */}
      <AquaBot />
      <Hero />
      <Problem />
      <Solution />
      <Showcase />
      <Trust />
      <SmartTech />
      <Calculator />
      <Testimonials />
      <CTA />
    </main>
  );
}
