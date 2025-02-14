import { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; // Import Firestore instance
import { doc, getDoc } from "firebase/firestore";

const Menu = ({ storeName }) => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "storeMenus", storeName);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setMenu(docSnap.data().menu); // Store menu items in state
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
      ) : menu.length > 0 ? (
        <ul className="menu-list">
          {menu.map((item) => (
            <li key={item["Item ID"]} className="menu-item">
              <img src={item["Image URL"]} alt={item["Item Name"]} className="menu-image" />
              <div className="menu-details">
                <strong>{item["Item Name"]}</strong> - ₹{item.Price} (⏳ {item["Prep Time"]} min)
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
