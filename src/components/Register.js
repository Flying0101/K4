import React, { useState } from 'react';
import './css/Register.css'

import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { newUser } from '../stores/NewUser';

function Register() {

  const navStyle = {
    color: 'white'
  };



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useRecoilState(newUser); 


  function addUser() {


    axios
      .post("https://k4backend.osuka.dev/users", {

        email: username,
        username: username,
        password: password,
        role: "user",
        name: {
          firstname: 'unknown',
          lastname: 'secret'
        },

        address: {
          city: 'sheesh',
          street: '7835 new road',
          number: 3,
          zipcode: '12926-3874'
        },
        phone: '1-570-236-7033'
      })
      .then((res) => res.data) 
      .then((dat) => setUser(dat))

    console.log(user)

    alert('REGISTER SUCCESSFUL');
  }



  return (
    <div>

      <div className="cont">
        <h1>Register Your New Account</h1>
        <p>Fill in this form to create an account.</p>
        <hr />

        <label><b>Email*</b></label>
        <input type="text" placeholder="Enter Email" className="email" onChange={(e) => setUsername(e.target.value)} value={username} required />

        <label><b>Password*</b></label>
        <input type="password" placeholder="Enter Password" className="psw" onChange={(e) => setPassword(e.target.value)} value={password} required />

        <button type="submit" className="registerBtn" onClick={addUser}>Register</button>
      </div>

      <div className="signIn">
        <p>Already have an account?

          <Link style={navStyle} to='/login'>
            <span className="log">Sign in</span>
          </Link>
        </p>
      </div>

    </div>
  );

}


export default Register;