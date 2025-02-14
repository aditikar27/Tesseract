import { useNavigate, useParams } from "react-router-dom";
import StoreCard from "../components/StoreCard";

const subStoresData: Record<string, { id: string; name: string }[]> = {
  "north-square": [
    { id: "georgia", name: "Georgia" },
    { id: "sri", name: "Sri" },
    { id: "chinese-corner", name: "Chinese Corner" },
    { id: "hot-and-cool", name: "Hot and Cool" },
  ],
  gazebo: [
    { id: "gazebo-1", name: "Gazebo 1" },
    { id: "gazebo-2", name: "Gazebo 2" },
    { id: "dakshin", name: "Dakshin" },
    { id: "lassi-house", name: "Lassi House" },
  ],
};

const SubStorePage = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const subStores = subStoresData[storeId || ""];

  if (!subStores) {
    return <h2 className="text-center text-xl font-bold">Store not found</h2>;
  }

  return (
    <div className="p-4">
      <button
        className="mb-4 px-4 py-2 bg-gray-300 rounded-lg"
        onClick={() => navigate(-1)}
      >
        🔙 Back
      </button>

      <h2 className="text-2xl font-bold mb-4">Select a Sub-Store</h2>
      <div className="grid grid-cols-2 gap-4">
        {subStores.map((subStore) => (
          <StoreCard
            key={subStore.id}
            name={subStore.name}
            onClick={() => navigate(`/menu/${encodeURIComponent(subStore.id)}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default SubStorePage;
