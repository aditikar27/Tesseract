import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MenuPage.css"; // Import CSS file
import { useCart } from "../context/CartContext"; // Import useCart

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  storeId: number; // Add storeId
}

export default function MenuPage() {
  const { storeId } = useParams();
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const { addToCart, removeFromCart, cartItems, totalAmount } = useCart(); // Use CartContext

  useEffect(() => {
    fetch(`/api/${storeId}.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // Map JSON keys to match TypeScript interface
        const formattedData = data.map((item: any) => ({
          id: item["Item ID"], // Convert JSON key to match TypeScript interface
          name: item["Item Name"],
          price: item["Price"],
          image: item["Image URL"],
          storeId: item["Store ID"],
        }));
        setMenu(formattedData);
      })
      .catch((err) => console.error("Error fetching menu:", err));
  }, [storeId]);

  const handleIncrement = (item: MenuItem) => {
    const cartItem = {
      ...item,
      quantity: 1, // Add quantity
      storeId: item.storeId, // Include storeId
    };
    addToCart(cartItem); // Add item to cart
  };

  const handleDecrement = (item: MenuItem) => {
    removeFromCart(item.id, item.storeId); // Pass both id and storeId
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">🍽 Menu</h1>

      <div className="menu-list">
        {menu.map((item) => (
          <div key={item.id} className="menu-item">
            {/* Food Image */}
            <img src={item.image} alt={item.name} className="menu-img" />

            {/* Name & Price */}
            <div className="menu-details">
              <span className="menu-name">{item.name}</span>
              <span className="menu-price">₹{item.price}</span>
            </div>

            {/* Quantity Buttons */}
            <div className="menu-buttons">
              <button
                className="btn minus"
                onClick={() => handleDecrement(item)}
              >
                -
              </button>
              <span className="quantity">
                {cartItems.find((i) => i.id === item.id && i.storeId === item.storeId)?.quantity || 0}
              </span>
              <button
                className="btn plus"
                onClick={() => handleIncrement(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Amount Display */}
      <div className="total-amount">Total: ₹{totalAmount}</div>
    </div>
  );
}