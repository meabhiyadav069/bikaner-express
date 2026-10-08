"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

const menuData = [
  { title: "Kesar Rasmalai", desc: "Saffron milk with soft cheese", price: "₹150", badge: "Signature", img: "https://images.unsplash.com/photo-1596703588960-3165780512f4?auto=format&fit=crop&q=80&w=600" },
  { title: "Raj Kachori", desc: "Crispy shell with tangy filling", price: "₹120", badge: "Best Seller", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600" },
  { title: "Bikaneri Bhujia", desc: "Spiced crispy snack", price: "₹90", badge: "", img: "https://images.unsplash.com/photo-1626777558637-25e22709e30a?auto=format&fit=crop&q=80&w=600" },
];

export const MenuSection: React.FC = () => {
  const [search, setSearch] = useState("");
  const { addItem } = useCart();
  const filtered = menuData.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#F9F5EC]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#D82A2A] mb-3 block">Our Finest</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F1917] tracking-tight mb-8">Signature Selection</h2>
          <input
            type="text"
            placeholder="Search our sweets & snacks..."
            className="w-full max-w-sm p-4 rounded-full border border-[#E5D9C5] outline-none focus:border-[#D82A2A]"
            onChange={(e) => setSearch(e.target.value)}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-white rounded-3xl border border-[#E5D9C5] shadow-[0_10px_30px_rgba(0,0,0,0.03)] group"
            >
              <div className="aspect-square overflow-hidden rounded-t-3xl">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
              </div>
              <div className="p-8 text-center">
                {item.badge && <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-[#FFB703]/15 text-[#B81D1D] mb-4 inline-block">{item.badge}</span>}
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#1F1917] group-hover:text-[#D82A2A] transition-colors mb-3">{item.title}</h3>
                <p className="text-sm text-stone-600 font-normal leading-relaxed mb-6">{item.desc}</p>
                <p className="font-sans font-bold text-lg text-[#B81D1D] mb-6">{item.price}</p>
                <button
                  onClick={() => addItem(item)}
                  className="w-full bg-[#D82A2A] text-white py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#B81D1D] transition-colors"
                >
                  Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
