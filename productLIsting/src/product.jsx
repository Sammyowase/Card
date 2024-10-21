
import React from 'react';
import './product.css'; 

const Product = ({ productName, price, imageUrl, description }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={productName} className="product-image" />
      <h3 className="product-name">{productName}</h3>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default Product;
