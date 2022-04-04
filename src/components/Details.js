import React from 'react';
import './css/Details.css';


import { useParams } from 'react-router-dom';
import { data } from '../stores/Items';
import { useRecoilValue } from 'recoil';

import AddCart from './AddFunct';

function Id() {

  const params = useParams();
  const datas = useRecoilValue(data);
  const items = datas.find(project => project.id == params.id)

  console.log(items)

  if (items === undefined) {
    return <div> COULD NOT GET API PRODUCTS</div>
  }

  const { Added } = AddCart();

  return (


    <div>
      <img src={items.image} className="itemImage" />
      <h2 className="nameD">{items.title}</h2>
      <h5 className="type">{items.category}</h5>
      <p className="itemInfoH">{items.description}</p>
      <h4 className="priceD">{items.price} kr</h4>
      <p className="sizeD">One Size</p>


      <button className="buyBtn" onClick={() => Added(items)} >BUY</button>
      <h1></h1>



    </div>
  );

}

export default Id;