import React, { useState, useEffect } from 'react';

import axios from 'axios';
const columns = [{  
       Header: 'Name',  
       accessor: 'name'  
      },{  
      Header: 'Age',  
      accessor: 'age'  
      }]  
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('https://shoppingapiacme.herokuapp.com/shopping')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
    <div>
      <h1  className='container'>Featured Products</h1>
      <div className='containers' >
            <span>Brand</span>
            <span>Item</span>
            <span>Color</span>
          </div>
      <div >

        {products.map((product) => (
          <div className='container'key={product.id}>
            <span>{product.brand}</span>
            <span>{product.item}</span>
            <span>{product.color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedProducts;