import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: string) => {
    login(role);
    navigate(role === "customer" ? "/customer" : "/owner");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Login as</h2>
      <button className="bg-blue-500 text-white px-4 py-2 m-2" onClick={() => handleLogin("customer")}>
        Customer
      </button>
      <button className="bg-green-500 text-white px-4 py-2 m-2" onClick={() => handleLogin("owner")}>
        Shop Owner
      </button>
    </div>
  );
};

export default LoginPage;
