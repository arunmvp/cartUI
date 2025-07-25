import React from 'react';
import ProductCard from '../Productcard/ProductCard';
import './ProductList.css';



const ProductList = ({productss}) => {
  return (
    <div className="product-list">
      {productss.map((item) => (
        <ProductCard key={item.id} {...item} /> 
      ))}
    </div>
  );
};

export default ProductList;
