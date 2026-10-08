"use client";

import React from "react";
import { motion } from "framer-motion";

export const GiftingSection: React.FC = () => {
  return (
    <section id="gifting" className="py-24 bg-white border-y border-[#E5D9C5]">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="bg-[#D82A2A] rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Royal Gifting Hampers</h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Curate the perfect gift for weddings, corporate milestones, or festive celebrations with our bespoke Bikaner Express hampers.
            </p>
            <form className="max-w-md mx-auto flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" className="w-full p-4 rounded-full text-[#1F1917] font-medium" />
              <input type="email" placeholder="Email" className="w-full p-4 rounded-full text-[#1F1917] font-medium" />
              <button className="w-full bg-[#FFB703] text-[#1F1917] py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
                Enquire Now
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
