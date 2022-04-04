import { React } from 'react';
import { useRecoilState } from 'recoil';
import './css/Cart.css';

import { cartItems } from '../stores/CartItems';



function Cart() {

  const [cartItem, setCartItem] = useRecoilState(cartItems);


  function deleteItem(index) {

    const deletedList = [...cartItem].filter((item, i) => index !== i)

    console.log(deletedList);
    setCartItem(deletedList)

  }

  return (
    <div>
      <h1 className="shesh">| CURRENT ITEMS BELOW |</h1>
      <span className="empty">{cartItem.length === 0 && <h3>This cart is empty...</h3>}</span>

      <div className="itemList">


        <ul>
          {cartItem.map((pro, index) => (

            <li id="liItem" key={pro.id}>
              {pro.category}
              <button className="minus" onClick={() => deleteItem(index)}>Ta bort</button>
              <h5 className="totalprice">price: {pro.price} kr</h5>
            </li>

          ))}


        </ul>

      </div>
    </div>
  );
}

export default Cart;