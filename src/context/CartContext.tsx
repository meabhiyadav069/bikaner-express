"use client";

import React, { createContext, useContext, useState } from "react";

interface CartItem {
  title: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: { title: string; price: string }) => void;
  removeItem: (title: string) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: { title: string; price: string }) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.title === item.title);
      if (existing) {
        return prev.map((i) => i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { title: item.title, price: parseInt(item.price.replace("₹", "")), quantity: 1 }];
    });
  };

  const removeItem = (title: string) => setItems((prev) => prev.filter((i) => i.title !== title));

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return <CartContext.Provider value={{ items, addItem, removeItem, total }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
