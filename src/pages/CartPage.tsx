import { useCart } from "../context/CartContext";


const CartPage = () => {
  const { cart, storeId, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Store: {storeId}</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={() => window.location.href = "/payment"}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
