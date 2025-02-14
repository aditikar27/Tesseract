import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CustomerPage from "./pages/CustomerPage";
import SubStorePage from "./pages/SubStorePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import OwnerPage from "./pages/OwnerPage";
import Layout from "./components/Cart";  // Ensure Layout includes CartBar
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>  {/* ✅ Wrap entire Routes inside Layout */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/substores/:storeId" element={<SubStorePage />} />
            <Route path="/menu/:storeId" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/owner" element={<OwnerPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
};
