"use client";

import React from "react";
import Link from "next/link";
import { LegalModal } from "./LegalModal";

export const Footer: React.FC = () => {
  const [modal, setModal] = React.useState<{isOpen: boolean, title: string, content: string}>({isOpen: false, title: "", content: ""});

  return (
    <footer className="bg-white border-t border-[#E5D9C5] py-20 text-[#1F1917]">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div>
          <h4 className="font-bold text-[#B81D1D] mb-4">BIKANER EXPRESS</h4>
          <p className="text-sm text-[#1F1917]/70 mb-2">1 com-3, NH-24, Avas Vikas, Shahjahanpur, Marha, Uttar Pradesh 242226</p>
          <p className="text-sm text-[#1F1917]/70 mb-2">Helpline: +91 1800 270 1950</p>
          <p className="text-sm text-[#1F1917]/70">Care: care@bikanerexpress.in</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Operating Hours</h4>
          <p className="text-sm text-[#1F1917]/70">Mon – Sun: 8:00 AM – 10:30 PM</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <button onClick={() => setModal({isOpen: true, title: "Terms & Conditions", content: "Ordering terms, refund policy, food delivery SLAs..."})} className="block text-sm text-[#1F1917]/70 hover:text-[#D82A2A]">Terms & Conditions</button>
          <button onClick={() => setModal({isOpen: true, title: "Privacy Policy", content: "Customer data handling & security details..."})} className="block text-sm text-[#1F1917]/70 hover:text-[#D82A2A]">Privacy Policy</button>
        </div>
        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <p className="text-sm text-[#1F1917]/70">Instagram</p>
        </div>
      </div>
      <LegalModal {...modal} onClose={() => setModal({...modal, isOpen: false})} />
    </footer>
  );
};
