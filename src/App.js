import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/Productlist/ProductList";
import CartDropdown from "./Components/Cartdropdown/CartDropdown";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?sortBy=title&order=asc")
      .then((res) => res.json())
      .then((data) => setCartItems(data.products));
  }, [cartItems]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <ProductList productss={cartItems} />
      {open && (
        <>
          <div className="overlay" onClick={toggleMenu}></div>
          <CartDropdown toggleMenu={toggleMenu} />
        </>
      )}
      <ToastContainer
        toastClassName="custom-toast"
        bodyClassName="custom-body"
        position="top-right"
        autoClose={1000}
      />
    </>
  );
}

export default App;
