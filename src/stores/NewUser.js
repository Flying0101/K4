import { atom } from 'recoil';

//vid registering lagras det nya datan här samt vid axios.get på AllUsers.js . 

export const newUser = atom({
  key: "newUser",
  default: []

});

