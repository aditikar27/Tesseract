import { createContext, useContext, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  storeId: number; // Add storeId
}

interface Order {
  storeId: number;
  tokenNumber: string;
  items: CartItem[];
  totalAmount: number;
  timestamp: string;
}

interface CartContextType {
  cartItems: CartItem[];
  totalAmount: number;
  storeId: number | null;
  setStoreId: (id: number) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, storeId: number) => void; // Updated to accept storeId
  clearCart: () => void;
  orders: Order[];
  addOrder: (order: Order) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [storeId, setStoreId] = useState<number | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = (item: CartItem) => {
    // If the cart is empty, set the storeId to the item's storeId
    if (cartItems.length === 0) {
      setStoreId(item.storeId);
    }

    // Check if the item belongs to the same store as the items already in the cart
    if (storeId === null || storeId === item.storeId) {
      setCartItems((prev) => {
        // Use both storeId and id to find the existing item
        const existingItem = prev.find(
          (i) => i.id === item.id && i.storeId === item.storeId
        );
        if (existingItem) {
          return prev.map((i) =>
            i.id === item.id && i.storeId === item.storeId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
        }
        return [...prev, { ...item, quantity: 1 }];
      });
    } else {
      // Show an alert if the user tries to add an item from a different store
      alert("Cannot order from multiple stores in the same order. Please clear your cart or complete the current order.");
    }
  };

  const removeFromCart = (id: number, storeId: number) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === id && i.storeId === storeId
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setStoreId(null);
  };

  const addOrder = (order: Order) => {
    setOrders((prev) => [...prev, order]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalAmount,
        storeId,
        setStoreId,
        addToCart,
        removeFromCart, // Include updated removeFromCart
        clearCart,
        orders,
        addOrder,
      }}
    >
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