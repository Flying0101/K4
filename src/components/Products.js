import React, { useEffect } from 'react';
import './css/Products.css';
import axios from 'axios';
import { useRecoilState } from 'recoil';

import { data } from '../stores/Items';
import { Link } from 'react-router-dom';




function Products() {

  const [item, setItem] = useRecoilState(data);


  useEffect(() => {
    axios.get("https://k4backend.osuka.dev/products")
      .then(response => {
        console.log(response);
        setItem(response.data)
      })
  }, []);

  useEffect(() => {

    console.log(item);
  }, [item]);


  return (
    <div>
      <h1>|IN STOCK|</h1>


      {item.map((products) => (
        <div key={`${products.id}`} className="container">

          <h4 className="title">{products.title}</h4>
          <h6 className="cate">{products.category}</h6>
          <p>{products.price}kr</p>
          <Link to={`/products/${products.id}`}>
            <button className="expBtn">EXPLORE</button>
          </Link>
        </div>))}





      <h1 className="end">more coming soon...</h1>








    </div>
  );
}

export default Products;