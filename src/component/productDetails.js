import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {
    console.log("product details");
    const { product_name } = useParams();
  return (
    <div>
      <Link to="/product" >back to product page</Link>
      <div>{product_name}</div>
    </div>
  )
}
