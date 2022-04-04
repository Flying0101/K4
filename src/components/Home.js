import React from 'react';
import './css/Home.css';
import im from './img/kaw.png';

import { Link } from 'react-router-dom';

function Home() {

  const navStyle = {
    color: 'black'
  };
  return (
    <div>
      <div>
        <h1 className="meaning">"Taken over, doctored and transformed, they become figurations of the consequences of today's society."</h1>
        <img src={im} className="con" />
        <h4 className="explore">What do you see?</h4>

        <Link style={navStyle} to='/products'>
          <h4 className="explTwo">Explore More</h4>
        </Link>

        <Link style={navStyle} to='/register'>
          <h4 className="register">REGISTER HERE</h4>
        </Link>
        <h4 className="acc"> Click above to register a free account! </h4>



      </div>
    </div>
  );
}

export default Home;