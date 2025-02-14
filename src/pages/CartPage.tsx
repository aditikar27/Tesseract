import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, totalAmount, storeId, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Store: {storeId ?? "Not Selected"}</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalAmount}</h3>
          <button onClick={clearCart}>Clear Cart</button>
          {totalAmount > 0 && <button onClick={() => window.location.href = "/payment"}>Proceed to Payment</button>}
        </div>
      )}
    </div>
  );
};

export default CartPage;
