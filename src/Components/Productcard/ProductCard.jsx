import React from 'react';
import './ProductCard.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/CreateSlice';


const ProductCard = ({id, title, price, images,thumbnail,description,rating }) => {

  const [imageset, setImageset] = useState(false);
  const [load, setLoad] = useState(false);

  const dispatch = useDispatch();

  const setLoading = () => { 
    setLoad(true); 
    setTimeout(() => {
      setLoad(false);
    }, 1500)
  }
  
    

  return (
    <div className="product-card">
      <img src={imageset ? thumbnail : images[0]} alt={title} onMouseEnter={()=>{setImageset(true)}} onMouseLeave={()=>{setImageset(false)}} /> 
      <h3>{title}</h3>
      <p className='des'>{description}</p> 
      <p className='des1'>Rating : {rating}</p> 
      <p>₹{price}</p>
      <button onClick={()=> { dispatch(addItem({id,title,price,images})) , setLoading()}}>{!load ? "Add to cart" : <span className='spinner'></span>}</button> 
      
    </div>
  );
};

export default ProductCard