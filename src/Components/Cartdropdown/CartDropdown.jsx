import React, { useState } from "react";
import "./CartDropdown.css";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/CreateSlice";
import { toast } from "react-toastify";

const CartDropdown = ({ toggleMenu }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [loadingItemId, setLoadingItemId] = useState(null); // better name

  const handleRemove = (id, title) => {
    setLoadingItemId(id);

    setTimeout(() => {
      dispatch(removeItem(id));
      setLoadingItemId(null);

      toast.success(`${title} removed from cart!`, {
        style: {
          backgroundColor: "#ad2e2eff",
          color: "#fff",
          borderRadius: "8px",
          opacity: 0.7,
        },
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    }, 1000);
  };

  return (
    <div className="cart-dropdown active">
      <div className="carttt">
        <h4>Your Cart</h4>
        <button className="remove-btnn" onClick={toggleMenu}>
          ×
        </button>
      </div>
      <div className="productsBox">
        {cartItems.map((d) => (
          <div className="cart-item" key={d.id}>
            <img src={d.images[0]} alt="prod" />
            <div className="item-info">
              <p>{d.title}</p>
              <span>qty: {d.qty}</span>
            </div>
            <button
              className="remove-btn"
              onClick={() => handleRemove(d.id, d.title)}
            >
              {loadingItemId === d.id ? (
                <span className="spinner"></span>
              ) : (
                "×"
              )}
            </button>
          </div>
        ))}
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default CartDropdown;
