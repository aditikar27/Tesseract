import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import CustomerPage from "./pages/CustomerPage";  
import OwnerPage from "./pages/OwnerPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/customer" element={<PrivateRoute><CustomerPage /></PrivateRoute>} />
          <Route path="/owner" element={<PrivateRoute><OwnerPage /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
