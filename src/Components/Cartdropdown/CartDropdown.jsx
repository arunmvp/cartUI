import React from "react";
import "./CartDropdown.css";
import { useSelector , useDispatch } from "react-redux";
import { removeItem } from "../../redux/CreateSlice";


const CartDropdown = ({ toggleMenu }) => {
  const cartItems = useSelector((state) => state.cart.items);
  
  const dispatch = useDispatch()

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
            <button className="remove-btn" onClick={()=> dispatch(removeItem(d.id))}>×</button>
          </div>
        ))}
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default CartDropdown;
