import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Food App</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-orange-500">Home</Link>
        <Link to="/cart" className="hover:text-orange-500">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
