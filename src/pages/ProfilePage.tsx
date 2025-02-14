import { useState, useEffect } from "react";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [activeToken, setActiveToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("activeToken");
    if (storedToken) {
      setActiveToken(storedToken);
    }
  }, []);

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      {activeToken ? (
        <div className="token-box">
          <h3>Your Active Order</h3>
          <p>Token Number: <strong>{activeToken}</strong></p>
          <p>Collect your order before closing time!</p>
        </div>
      ) : (
        <p>No active orders.</p>
      )}
    </div>
  );
};

export default ProfilePage;
