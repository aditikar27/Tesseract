import { useNavigate } from "react-router-dom";

const OwnerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shop Owner Dashboard</h2>
      {/* Display Order List Here */}
    </div>
  );
};

export default OwnerPage;
