import React from "react";
import "./CartDropdown.css";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/CreateSlice";
import { toast } from "react-toastify";
import { useState } from "react";

const CartDropdown = ({ toggleMenu }) => {
  const cartItems = useSelector((state) => state.cart.items); 

  const [setloadd, setSetload] = useState(null); 

  const dispatch = useDispatch(); 

    const [load, setLoad] = useState(false); 
    
    const setLoading = (id) => {
    if (id) {
      setSetload(id);
    }
    setLoad(true);
    setTimeout(() => {
      setLoad(false); 
      setSetload(null);
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
              onClick={() => {
                setTimeout(() => {
                  dispatch(removeItem(d.id));
                }, 1000);
                setLoading(d.id);
                toast.success(`${d.title} removed from cart!`, { 
                  style: {
                    backgroundColor: "#ad2e2eff",
                    top: "70px",
                    right: "400px",
                    color: "#fff",
                    borderRadius: "8px",
                    opacity: 0.7,
                  },
                });
              }}
            >
              {setloadd === d.id ?  <span className="spinner"></span> : "×"}
            </button>
          </div>
        ))}
      </div>
      <button className="checkout-btn">Checkout</button> 
    </div>
  );
};

export default CartDropdown;
