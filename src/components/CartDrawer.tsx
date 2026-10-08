"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, total } = useCart();

  const handleWhatsAppCheckout = () => {
    const itemStr = items.map(i => `${i.title} (${i.quantity} x ₹${i.price})`).join("%0A");
    const message = `Hello Bikaner Express! I'd like to order:%0A%0A${itemStr}%0A%0ATotal: ₹${total}%0A%0APlease confirm my order.`;
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-[#E5D9C5] flex justify-between items-center bg-[#F9F5EC]">
              <h2 className="font-serif text-2xl font-bold text-[#B81D1D] flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" /> Your Order
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p className="font-medium">Your cart is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.title} className="flex justify-between items-center border-b border-[#E5D9C5]/50 pb-4">
                    <div>
                      <h4 className="font-bold text-[#1F1917]">{item.title}</h4>
                      <p className="text-xs text-stone-500 uppercase tracking-widest font-semibold">
                        Qty: {item.quantity} x ₹{item.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-[#B81D1D]">₹{item.price * item.quantity}</span>
                      <button onClick={() => removeItem(item.title)} className="text-stone-300 hover:text-[#D82A2A] transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 border-t border-[#E5D9C5] bg-[#F9F5EC] space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-bold text-[#1F1917]">Subtotal</span>
                  <span className="font-serif font-bold text-2xl text-[#B81D1D]">₹{total}</span>
                </div>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#D82A2A] text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#B81D1D] transition-colors shadow-lg shadow-red-900/20 flex items-center justify-center gap-3"
                >
                  Checkout via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
