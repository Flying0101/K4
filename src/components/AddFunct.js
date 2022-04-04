import React from 'react';
import { useRecoilState } from 'recoil';
import { cartItems } from '../stores/CartItems';
import { nanoid } from '@reduxjs/toolkit';

function AddCart() {

   const [cartItem, setCartItem] = useRecoilState(cartItems);


   function Added(itemss) {
      const newItem = {
         ...itemss,
         id: nanoid()
      }

      setCartItem([...cartItem, newItem]);
      alert('Added To Shopping Cart! ');
   }





   return { Added };
}


export default AddCart;
