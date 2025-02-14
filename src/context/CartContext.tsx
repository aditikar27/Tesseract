<<<<<<< HEAD
import React, { createContext, useContext, useState, ReactNode } from "react";
=======
import { createContext, useContext, useState } from "react";
>>>>>>> 347d94590de55fb1dfaacb56e76dab559c4fea74

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
<<<<<<< HEAD
  cart: CartItem[];
  storeId: string | null;
  addToCart: (item: CartItem, storeId: string) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
=======
  cartItems: CartItem[];
  totalAmount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
>>>>>>> 347d94590de55fb1dfaacb56e76dab559c4fea74
}

const CartContext = createContext<CartContextType | undefined>(undefined);

<<<<<<< HEAD
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
=======
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Calculate total amount
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
>>>>>>> 347d94590de55fb1dfaacb56e76dab559c4fea74
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
<<<<<<< HEAD
    setCart((prev) => prev.filter((item) => item.id !== id));
    if (cart.length === 1) setStoreId(null);
  };

  const clearCart = () => {
    setCart([]);
    setStoreId(null);
  };

  return (
    <CartContext.Provider value={{ cart, storeId, addToCart, removeFromCart, clearCart }}>
=======
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, addToCart, removeFromCart }}>
>>>>>>> 347d94590de55fb1dfaacb56e76dab559c4fea74
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
