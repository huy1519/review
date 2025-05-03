import React from 'react';
import ProductItem from './ProductItem';
import productData from './Data';

const ProductList = () => {
  return (
    <>
      {productData.map(product => (
        <ProductItem key={product.id} {...product} />
      ))}
    </>
  );
};

export default ProductList;
