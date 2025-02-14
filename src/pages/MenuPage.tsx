import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  prepTime: number;
  image: string;
}

export default function MenuPage() {
  const { storeId } = useParams();
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const cartContext = useCart(); // ✅ Store context in a variable
  


  if (!cartContext) {
    console.error("Cart context is undefined! Make sure CartProvider is wrapping your app.");
    return <div>Error: Cart is not available.</div>;
  }

  const { cart = [], addToCart, removeFromCart } = useCart();

useEffect(() => {
  fetch(`https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/getMenu?storeId=${storeId}`)
    .then((res) => res.json())
    .then(setMenu)
    .catch((err) => console.error("Error fetching menu from Firestore:", err));
}, [storeId]);


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <ul className="space-y-4">
        {menu.map((item) => {
          const cartItem = cart.find((cartItem) => cartItem.id === item.id);

          return (
            <li key={`menu-item-${item.id}`} className="flex items-center gap-4 border-b pb-2">
              <img src={item.image} alt={item.name} width="50" />
              <div className="flex-1">
                {item.name} - ₹{item.price} (⏳ {item.prepTime} min)
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded"
                  onClick={() => removeFromCart(item.id)}
                  disabled={!cartItem}
                >
                  ➖
                </button>
                <span className="w-6 text-center">{cartItem ? cartItem.quantity : 0}</span>
                <button
                  className="px-3 py-1 bg-green-500 text-white rounded"
                  onClick={() => addToCart({ ...item, quantity: 1 }, storeId!)}
                >
                  ➕
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 text-lg font-bold">
        Total: ₹{cart?.reduce((sum, item) => sum + item.quantity * item.price, 0) || 0}
      </div>
    </div>
  );
}
