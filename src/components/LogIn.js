import React, { useState } from 'react';
import './css/Account.css';
import { useRecoilState } from 'recoil';
import { login } from '../stores/Login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userData } from '../stores/UserData';

function LogIn() {

  const nav = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginState, setLoginState] = useRecoilState(login); //lagrar token
  const [userInfo, setUserInfo] = useRecoilState(userData);  //lagrar user-information / data objekten


  function log() {
    axios.post("https://k4backend.osuka.dev/auth/login", {

      username: username,
      password: password
    })
      .then((res) => res.data)
      .then((data) => {

        setLoginState(data.token)

        axios.get(`https://k4backend.osuka.dev/users/${data.userId}`)
          .then((res) => {

            setUserInfo(res.data)

            if (res.data.role === "admin") {

              nav("/admin");
            }

            else {
              nav("/userpage");
            }



          })





      })

  }





  return (
    <div>
      <div className="login">
        <div className="contLog">
          <h1>LOG IN</h1>
          <label><b>Email*</b></label>
          <input type="text" placeholder="Enter Email" onChange={(e) => setUsername(e.target.value)} value={username} required />

          <label><b>Password*</b></label>
          <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password} required />

          <button type="submit" className="logIn" onClick={log}>Login</button>
        </div>
      </div>
    </div>
  );

}


export default LogIn;