const CartPage = () => {
    return (
        <div>
            <h1>Your Cart</h1>
            <div>Cart Items Here...</div>
            <button onClick={() => window.location.href = "/payment"}>Proceed to Payment</button>
        </div>
    );
};

export default CartPage;
