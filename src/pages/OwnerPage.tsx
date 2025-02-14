import { useNavigate } from "react-router-dom";

const OwnerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <button
        className="mb-4 px-4 py-2 bg-gray-300 rounded-lg"
        onClick={() => navigate(-1)}
      >
        🔙 Back
      </button>

      <h2 className="text-2xl font-bold mb-4">Shop Owner Dashboard</h2>
      {/* Display Order List Here */}
    </div>
  );
};

export default OwnerPage;
