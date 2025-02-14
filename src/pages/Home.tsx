import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css"; 
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Food Booking System</h1>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => handleRoleSelection("customer")}
        >
          Customer
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={() => handleRoleSelection("owner")}
        >
          Shop Owner
        </button>
      </div>

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Login</h2>
            <input
              type="text"
              placeholder="Username"
              className="border p-2 w-full mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 w-full mb-4"
            />
            <div className="flex gap-2">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setShowLogin(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
