import React from 'react';
import './Navbar.css';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Navbar = ({toggleMenu}) => { 
  
  const CartItems = useSelector((d)=> d.cart.items)

  return (
    <nav className="navbar">
      <div className="logo">🛍️ MyCart</div>
      <div className="nav-actions">
        <div className="cart-icon" onClick={toggleMenu}> 
          <BsCart3 size={22} />
          <span className="cart-badge">{CartItems.length}</span> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
