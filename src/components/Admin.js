import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { login } from '../stores/Login';
import { useNavigate } from 'react-router-dom';
import './css/Admin.css';
import { Link } from 'react-router-dom';
import { data } from '../stores/Items';
import axios from 'axios';

function Admin() {

  const [item, setItem] = useRecoilState(data); //produkt-store, här är produkterna


  const navStyle = {
    color: 'white'
  };


  const nav = useNavigate()
  const [loginState, setLoginState] = useRecoilState(login); //här lagras token. 


  function logOut() {   //logga ut funktion, tömmer min login store. 
    setLoginState("")


    if (loginState == "") {
      nav("/account");

    }
  }

  useEffect(() => {
    axios.get("https://k4backend.osuka.dev/products")
      .then(response => {
        setItem(response.data)
      })
  }, []);

  useEffect(() => {

  }, [item]);





  if (loginState) {
    return (
      <div>
        <h1>secret admin club ;) </h1>


        <button className="logOut" onClick={logOut}>LOG OUT</button>



        <div className="go">
          <h4>Click below to see all the users</h4>
          <Link style={navStyle} to='/alluser'>
            <button>GO TO</button>
          </Link>
        </div>

        <div className="pro">
          <h4 className="prod">see all products below / {item.length} items </h4>
          {item.map((products) => (
            <div key={`${products.id}`} className="allpro">

              <h4 className="title">{products.title}</h4>
              <h6 className="cate">{products.category}</h6>
              <p>{products.price}kr</p>
            </div>))}
        </div>
      </div>
    );
  }
  else {
    return <h1>|ERROR| To see this information you need to log in... |ERROR|</h1>
  }

}


export default Admin;