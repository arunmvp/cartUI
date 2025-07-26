import React, { useState } from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CreateSlice";
import { toast } from "react-toastify";

const ProductCard = ({ 
  id, 
  title, 
  price, 
  images,
  thumbnail,  
  description, 
  rating,
}) => {
  const [imageset, setImageset] = useState(false); 
  const [load, setLoad] = useState(false); 

  const dispatch = useDispatch(); 

  const setLoading = () => { 
    setLoad(true);
    setTimeout(() => { 
      setLoad(false);
    }, 1500);
  };

  return (
    <div className="product-card">
      <img
        src={imageset ? thumbnail : images[0]}
        alt={title}
        onMouseEnter={() => {
          setImageset(true);
        }}
        onMouseLeave={() => {
          setImageset(false);
        }}
      />
      <h3>{title}</h3>
      <p className="des">{description}</p>
      <p className="des1">Rating : {rating}</p>
      <p>₹{price}</p>
      <button
        onClick={() => {
          dispatch(addItem({ id, title, price, images }));
          setLoading();
          toast.success(`${title} added to cart!`, {
            style: {
              backgroundColor: "#3c3d3cff",
              top: "70px",
              color: "#fff",
              borderRadius: "8px",
            },
          });
        }}
      >
        {!load ? "Add to cart" : <span className="spinner"></span>}
      </button>
    </div>
  );
};

export default ProductCard;
