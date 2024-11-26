import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateQuantity, removeItem } from "./CartSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items); // Retrieve items from Redux
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Retrieve total quantity from Redux
  const dispatch = useDispatch();

  const calculateTotalAmount = () =>
    cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(addItem(item)); // Dispatch addItem action to increment item
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 })); // Decrease quantity
    } else {
      dispatch(removeItem(item.name)); // Remove item if quantity is zero
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name)); // Dispatch removeItem action
  };

  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>Total Items: {totalQuantity}</div>
      <div>
        {cartItems.map((item) => (
          <div key={item.name} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.cost}</p>
              <p>Subtotal: ${item.cost * item.quantity}</p>
              <div>
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
                <button onClick={() => handleRemove(item.name)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3>Total Cost: ${calculateTotalAmount()}</h3>
        <button onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
