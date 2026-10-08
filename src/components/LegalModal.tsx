"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="w-full max-w-2xl rounded-3xl bg-[#F9F5EC] p-8 shadow-2xl border border-[#E5D9C5]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-serif text-2xl text-[#1F1917]">{title}</h2>
            <button onClick={onClose} className="text-[#1F1917]/60 hover:text-[#D82A2A]">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="prose prose-stone max-h-[60vh] overflow-y-auto">
            <p className="text-[#1F1917]/80 text-sm leading-relaxed">{content}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
