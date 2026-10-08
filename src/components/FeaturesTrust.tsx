"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Droplets, Leaf } from "lucide-react";

const features = [
  { icon: <Star className="w-6 h-6 text-[#FFB703]" />, label: "4.8★ Google Rating" },
  { icon: <Droplets className="w-6 h-6 text-[#D82A2A]" />, label: "100% Pure Ghee" },
  { icon: <Leaf className="w-6 h-6 text-[#D82A2A]" />, label: "Zero Preservatives" },
  { icon: <ShieldCheck className="w-6 h-6 text-[#D82A2A]" />, label: "Daily Fresh Batch" },
];

export const FeaturesTrust: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-[#E5D9C5]">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col items-center gap-3 text-center"
          >
            {f.icon}
            <span className="text-xs md:text-sm font-bold text-[#1F1917] uppercase tracking-wider">{f.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
