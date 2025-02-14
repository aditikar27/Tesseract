import { useCart } from "../context/CartContext";

const OwnerPage = () => {
  const { orders } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shop Owner Dashboard</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="mb-4 p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Order #{index + 1}</h3>
              <p>Token Number: {order.tokenNumber}</p>
              <p>Store ID: {order.storeId}</p>
              <p>Total Amount: ₹{order.totalAmount}</p>
              <p>Time: {order.timestamp}</p>
              <h4 className="text-lg font-medium mt-2">Items:</h4>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id} className="ml-4">
                    {item.name} - ₹{item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OwnerPage;