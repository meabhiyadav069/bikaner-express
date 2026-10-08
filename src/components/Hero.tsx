"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] w-full bg-[#F9F5EC] pt-40 pb-32 flex items-center">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#D82A2A] mb-3 block">
            Authentic Heritage
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.08] tracking-tight text-[#1F1917] mb-8">
            Experience True <span className="font-serif italic font-normal text-[#B81D1D]">Bikaner Heritage</span>
          </h1>
          <p className="text-base md:text-xl text-stone-600 font-light max-w-lg leading-relaxed mb-10">
            From crispy Namkeen to rich royal Mithai, delivered fresh from our kitchen.
          </p>
          <button className="bg-[#FFB703] text-[#1F1917] px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-[#D82A2A] hover:text-white transition-colors">
            <ShoppingCart className="w-4 h-4" /> Order Now
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#E5D9C5]"
        >
          <img src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&q=80&w=800" alt="Sweets" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};
