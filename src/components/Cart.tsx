import { Outlet } from "react-router-dom";
import CartBar from "./CartBar";

export default function Layout() {
  return (
    <div className="pb-16">
      <Outlet />
      <CartBar /> {/* ✅ Ensure CartBar is always rendered */}
    </div>
  );
}
