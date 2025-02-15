import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css"; // External CSS

const Home = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [role, setRole] = useState<"customer" | "owner" | null>(null);

  const handleRoleSelection = (selectedRole: "customer" | "owner") => {
    setRole(selectedRole);
    setShowLogin(true);
  };

  const handleLogin = () => {
    if (role) {
      navigate(`/${role}`);
    }
  };

  return (
    <div className="home-container">
      {/* Title */}
      <h1 className="title">Food Booking System</h1>

    <div><img className="title" src="cravory.png" alt="Cravory"></img></div>

      {/* Role Selection Buttons */}
      <div className="button-group">
        <button className="role-button" onClick={() => handleRoleSelection("customer")}>
          Customer
        </button>
        <button className="role-button" onClick={() => handleRoleSelection("owner")}>
          Shop Owner
        </button>
      </div>

      {/* Login Popup */}
      {showLogin && (
        <div className="overlay">
          <div className="login-box">
            <h2 className="login-title">Login</h2>
            <input type="text" placeholder="Username" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <div className="login-buttons">
              <button className="login-button" onClick={handleLogin}>Login</button>
              <button className="cancel-button" onClick={() => setShowLogin(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
