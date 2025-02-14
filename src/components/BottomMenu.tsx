import { Link } from "react-router-dom";

export default function BottomMenu() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-center">
      <Link to="/cart" className="px-4 py-2 bg-blue-500 text-white rounded">
        View Cart
      </Link>
    </div>
  );
}
