import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function MenuPage() {
  const { storeId } = useParams();
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    fetch(`/api/${storeId}.json`)
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((item: any) => ({
          id: item["Item ID"],
          name: item["Item Name"],
          price: item["Price"],
          image: item["Image URL"],
        }));
        setMenu(formattedData);
        console.log("Fetched and formatted menu:", formattedData);
      })
      .catch((err) => console.error("Error fetching menu:", err));
  }, [storeId]);
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <ul className="space-y-4">
        {menu.map((item) => {
          if (!item.id) return null; // Skip items without valid IDs

          const cartItem = cart.find((cartItem) => cartItem.id === item.id);

          return (
            <li key={`menu-item-${item.id}`} className="flex items-center gap-4 border-b pb-2">
              <img src={item.image} alt={item.name} width="50" />
              <div className="flex-1">
                {item.name} - ₹{item.price}
              </div>
              <div className="flex items-center">
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded"
                  onClick={() => removeFromCart(item.id)}
                  disabled={!cartItem}
                >
                  -
                </button>
                <span className="mx-2">{cartItem ? cartItem.quantity : 0}</span>
                <button
                  className="px-3 py-1 bg-green-500 text-white rounded"
                  onClick={() => addToCart({ ...item, quantity: 1 }, storeId!)}
                >
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
