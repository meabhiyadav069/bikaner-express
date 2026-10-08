"use client";

import React from "react";
import { motion } from "framer-motion";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F9F5EC]">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#D82A2A] mb-3 block">
            Our Story
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F1917] tracking-tight mb-8">
            Bikaner's Culinary Legacy
          </h2>
          <div className="w-16 h-px bg-[#D82A2A] mb-8" />
          <p className="text-base md:text-xl text-stone-600 font-light leading-relaxed">
            Born in the heart of Bikaner, our recipes have traveled through generations to bring you the most authentic taste of royal Indian confectionery. Every ingredient tells a story of tradition, purity, and passion.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="aspect-square lg:aspect-video bg-[#E5D9C5] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        />
      </div>
    </section>
  );
};
