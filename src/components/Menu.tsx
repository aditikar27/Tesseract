import { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; // Import Firestore instance
import { doc, getDoc } from "firebase/firestore";
import { StoreMenu, MenuItem } from "../types/Menu"; // Import TypeScript types

interface MenuProps {
  storeName: string;
}

const Menu: React.FC<MenuProps> = ({ storeName }) => {
  const [menu, setMenu] = useState<MenuItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "storeMenus", storeName);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as StoreMenu; // Type casting
          setMenu(data.menu);
        } else {
          console.log("No such store found!");
          setMenu([]);
        }
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [storeName]);

  return (
    <div className="menu-container">
      <h2 className="menu-title">Menu for {storeName}</h2>
      {loading ? (
        <p>Loading menu...</p>
      ) : menu && menu.length > 0 ? (
        <ul className="menu-list">
          {menu.map((item) => (
            <li key={item.ItemID} className="menu-item">
              <img src={item.ImageURL} alt={item.ItemName} className="menu-image" />
              <div className="menu-details">
                <strong>{item.ItemName}</strong> - ₹{item.Price} (⏳ {item.PrepTime} min)
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No menu items available.</p>
      )}
    </div>
  );
};

export default Menu;
