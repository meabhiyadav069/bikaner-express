"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartDrawer } from "./CartDrawer";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Sweets", href: "#sweets" },
  { label: "Namkeen", href: "#namkeen" },
  { label: "Gifting", href: "#gifting" },
  { label: "Menu", href: "#menu" },
  { label: "Outlets", href: "#outlets" },
  { label: "About Us", href: "#about" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { items } = useCart();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="bg-[#D82A2A] text-white text-[10px] md:text-xs py-2.5 text-center font-medium uppercase tracking-wider">
          Flat ₹100 Off on fresh sweets | Fast Delivery across India
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="text-xl md:text-2xl font-serif tracking-tighter text-[#B81D1D] uppercase font-bold">
              BIKANER EXPRESS
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-stone-800 hover:text-[#D82A2A] transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <Search className="h-5 w-5 text-[#1F1917] cursor-pointer hover:text-[#D82A2A] transition-colors" />
              <div className="relative cursor-pointer" onClick={() => setCartOpen(true)}>
                <ShoppingCart className="h-5 w-5 text-[#1F1917] hover:text-[#D82A2A] transition-colors" />
                {count > 0 && <span className="absolute -top-2 -right-2 bg-[#D82A2A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{count}</span>}
              </div>
              <button className="bg-[#D82A2A] text-white px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#B81D1D] transition-colors shadow-lg shadow-red-900/10">
                Order Online
              </button>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#1F1917]">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:hidden bg-white px-6 py-8 border-t border-[#E5D9C5] shadow-xl"
            >
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-xs font-medium uppercase tracking-[0.18em] text-stone-800 hover:text-[#D82A2A]">
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-[#E5D9C5]">
                  <button className="w-full bg-[#D82A2A] text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs">
                    Order Online
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};
