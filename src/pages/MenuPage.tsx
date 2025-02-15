import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MenuPage.css"; // Import CSS file
import { useCart } from "../context/CartContext"; // Import useCart

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  storeId: number;
}

export default function MenuPage() {
  const { storeId } = useParams();
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [storename, setStoreName] = useState(""); // Added missing state
  const { addToCart, removeFromCart, cartItems, totalAmount } = useCart();

  useEffect(() => {
    if (!storeId) return; // Ensure storeId is valid

    fetch(`/api/${storeId}.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const formattedData = data.map((item: any) => ({
          id: item["Item ID"],
          name: item["Item Name"],
          price: item["Price"],
          image: item["Image URL"],
          storeId: item["Store ID"],
          storename: item["Store Name"],
        }));
        
        setMenu(formattedData);

        if (formattedData.length > 0) {
          setStoreName(formattedData[0].storename); // Set store name
        }
      })
      .catch((err) => console.error("Error fetching menu:", err));
  }, [storeId]);

  const handleIncrement = (item: MenuItem) => {
    addToCart({ ...item, quantity: 1 });
  };

  const handleDecrement = (item: MenuItem) => {
    removeFromCart(item.id, item.storeId);
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">{storename || "Loading..."}</h1>

      <div className="menu-list">
        {menu.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-details">
              <span className="menu-name">{item.name}</span>
              <span className="menu-price">₹{item.price}</span>
            </div>

            <div className="menu-buttons">
              <button className="btn minus" onClick={() => handleDecrement(item)}>-</button>
              <span className="quantity">
                {cartItems.find((i) => i.id === item.id && i.storeId === item.storeId)?.quantity || 0}
              </span>
              <button className="btn plus" onClick={() => handleIncrement(item)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="total-amount">Total: ₹{totalAmount}</div>
    </div>
  );
}
