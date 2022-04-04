import React from 'react';
import { atom } from 'recoil';


// här lagras produkt datan. 


export const data = atom({
  key: "Items",
  default: []

});

