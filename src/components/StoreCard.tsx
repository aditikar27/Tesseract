import "../styles/StoreCard.css";
interface StoreCardProps {
    name: string;
    onClick: () => void;
  }
  
  const StoreCard: React.FC<StoreCardProps> = ({ name, onClick }) => {
    return (
      <div
        className="store-card"
        onClick={onClick}
      >
        <h3>{name}</h3>
      </div>
    );
  };
  
  export default StoreCard;
  
  