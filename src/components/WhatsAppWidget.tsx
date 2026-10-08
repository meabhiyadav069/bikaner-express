"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppWidget: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hello%20Bikaner%20Express!%20I%20would%20like%20to%20place%20an%20order%20and%20know%20about%20today's%20fresh%20sweets%20and%20delivery."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 transition-all"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="text-sm font-semibold pr-2">Order via WhatsApp</span>
    </motion.a>
  );
};
