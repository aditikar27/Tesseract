import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/Home";
import CustomerPage from "./pages/CustomerPage";
import SubStorePage from "./pages/SubStorePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import OwnerPage from "./pages/OwnerPage";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import CartBar from "./components/CartBar";
import { CartProvider } from "./context/CartContext"; 

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideCartBar = location.pathname === "/cart" || location.pathname === "/payment";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
      {!hideCartBar && <CartBar />}
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/substores/:storeId" element={<SubStorePage />} />
            <Route path="/menu/:storeId" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/owner" element={<OwnerPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;
