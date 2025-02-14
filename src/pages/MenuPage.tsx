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

  useEffect(() => {
    fetch(`./api/${storeId}.json`)
      .then((res) => res.json())
      .then(setMenu)
      .catch((err) => console.error("Error fetching menu:", err));
  }, [storeId]);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} width="50" />
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
