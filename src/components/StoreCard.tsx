interface StoreCardProps {
    name: string;
    onClick: () => void;
  }
  
  const StoreCard: React.FC<StoreCardProps> = ({ name, onClick }) => {
    return (
      <div
        className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    );
  };
  
  export default StoreCard;
  