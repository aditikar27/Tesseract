import { useNavigate } from "react-router-dom";
import StoreCard from "../components/StoreCard";

const storeData = [
  { id: "north-square", name: "North Square", hasSubStores: true },
  { id: "gazebo", name: "Gazebo", hasSubStores: true },
  { id: "gymkhana", name: "Gymkhana", hasSubStores: false },
  { id: "milky-way", name: "Milky Way", hasSubStores: false }
];

const CustomerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <button
        className="mb-4 px-4 py-2 bg-gray-300 rounded-lg"
        onClick={() => navigate(-1)}
      >
        🔙 Back
      </button>

      <h2 className="text-2xl font-bold mb-4">Choose a Food Area</h2>
      <div className="grid grid-cols-2 gap-4">
        {storeData.map((store) => (
          <StoreCard
            key={store.id}
            name={store.name}
            onClick={() => navigate(store.hasSubStores ? `/substores/${store.id}` : `/menu/${store.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerPage;
