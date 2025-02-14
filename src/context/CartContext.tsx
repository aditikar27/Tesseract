import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  storeId: string | null;
  addToCart: (item: CartItem, storeId: string) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [storeId, setStoreId] = useState<string | null>(null);

  const addToCart = (item: CartItem, newStoreId: string) => {
    if (storeId && storeId !== newStoreId) {
      alert(`You already have items from ${storeId}. Clear cart to order from ${newStoreId}.`);
      return;
    }
    setStoreId(newStoreId);
    setCart((prev) => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    if (cart.length === 1) setStoreId(null);
  };

  const clearCart = () => {
    setCart([]);
    setStoreId(null);
  };

  return (
    <CartContext.Provider value={{ cart, storeId, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
