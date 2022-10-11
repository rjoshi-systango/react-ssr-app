import ProductCard from './ProductCard';
import React from 'react';

const Product = (props) => {
  const filteredProductList = props.filteredProductList;

  return (
    <div className="container-fluid row">
      {filteredProductList.map((product) => (
        <ProductCard key={product.id} productInformation={product} />
      ))}

    </div>
  )
}

export default Product;