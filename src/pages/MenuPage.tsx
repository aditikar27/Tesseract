import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function MenuPage() {
  const { storeId } = useParams();
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [cart, setCart] = useState<Record<number, number>>({}); // Track quantity of each item

  useEffect(() => {
    fetch(`/api/${storeId}.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then(setMenu)
      .catch((err) => console.error("Error fetching menu:", err));
  }, [storeId]);

  // Function to increase quantity
  const increment = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  // Function to decrease quantity
  const decrement = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
  };

  // Calculate total price
  const totalAmount = menu.reduce(
    (sum, item) => sum + (cart[item.id] || 0) * item.price,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <ul className="space-y-4">
        {menu.map((item) => (
          <li key={item.id} className="flex items-center gap-4 border-b pb-2">
            <img src={item.image} alt={item.name} width="50" />
            <div className="flex-1">
              {item.name} - ₹{item.price}
            </div>
            {/* Quantity control buttons */}
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 bg-red-500 text-white rounded"
                onClick={() => decrement(item.id)}
              >
                ➖
              </button>
              <span className="w-6 text-center">{cart[item.id] || 0}</span>
              <button
                className="px-3 py-1 bg-green-500 text-white rounded"
                onClick={() => increment(item.id)}
              >
                ➕
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Total Amount Display */}
      <div className="mt-4 text-lg font-bold">
        Total: ₹{totalAmount}
      </div>
    </div>
  );
}
