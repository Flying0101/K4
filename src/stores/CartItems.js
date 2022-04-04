import React from 'react';
import { atom } from 'recoil';


export const cartItems = atom({
    key: "cartItems",
    default: []
});
