import React from 'react';
//= Components
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';
import RelatedProducts from './RelatedProducts';

function Product() {
  return (
    <section className="product-details section-padding">
      <div className="container">
        <ProductInfo />
        <ProductDetails />
        <RelatedProducts />
      </div>
    </section>
  )
}

export default Product