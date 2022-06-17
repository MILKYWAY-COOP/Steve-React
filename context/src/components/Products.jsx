import { useState } from 'react';
import Card from './Card';

function Products() {
  const products = [
    { name: 'vest', price: 100 },
    { name: 't-shirt', price: 50 },
    { name: 'jacket', price: 200 },
    { name: 'shoes', price: 150 },
    { name: 'socks', price: 50 },
    { name: 'gloves', price: 100 },
    { name: 'hat', price: 50 },
    { name: 'jacket', price: 200 }
  ];

  return (
    <div className="product">
      {products.map((product) => (
        <Card key={product.name} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default Products;