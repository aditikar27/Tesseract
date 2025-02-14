import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/Home";
import CustomerPage from "./pages/CustomerPage";
import SubStorePage from "./pages/SubStorePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import OwnerPage from "./pages/OwnerPage";
<<<<<<< HEAD
import Layout from "./components/Cart";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/owner" element={<OwnerPage />} />

        <Route element={<Layout />}>
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/substores/:storeId" element={<SubStorePage />} />
          <Route path="/menu/:storeId" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Route>
      </Routes>
    </Router>
=======
import Navbar from "./components/Navbar";
import CartBar from "./components/CartBar";
import { CartProvider } from "./context/CartContext"; // Import CartProvider

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
    <CartProvider> {/* ✅ Now wrapping everything inside CartProvider */}
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
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
>>>>>>> 347d94590de55fb1dfaacb56e76dab559c4fea74
  );
};

export default App;
