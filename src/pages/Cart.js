import React, { useContext, useState } from "react";
import { Context } from "../ContextPics";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, cleanCart } = useContext(Context);
  const [isOrdering, setIsOrdering] = useState(false);

  const total = cartItems.length * 5.99;
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  function handleOrder() {
    setIsOrdering(true);
    setTimeout(() => {
      console.log("Order placed");
      cleanCart();
      setIsOrdering(false);
    }, 3000);
  }

  function MyButton() {
    if (cartItems.length == 0) {
      return null
    }
    return (
      <div className="order-button">
        <button disabled={isOrdering} onClick={handleOrder}>
          {isOrdering ? "Ordering..." : "Place Order"}
        </button>
      </div>
    );
  }

  return (
    <main className="cart-page">
      <h1>{isOrdering ? "Ordering..." : "Check out"}</h1>
      {cartItemElements}
      <p className="total-cost">
        Total:{" "}
        {total.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </p>
      <MyButton/>
    </main>
  );
}

export default Cart;
