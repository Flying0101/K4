import React from 'react';

import { Link } from 'react-router-dom';

function Nav() {


    const navStyle = {
        color: 'white'
    };



    return (
        <div>
            <nav>

                <Link style={navStyle} to='/'>
                    <h3 className="logo">LogoArt</h3>
                </Link>
                <ul className="options">
                    <Link style={navStyle} to='/login'>
                        <li className="ac">Account</li>
                    </Link>
                    <Link style={navStyle} to='/products'>
                        <li>Products</li>
                    </Link>
                    <Link style={navStyle} to='/cart'>
                        <li>Shopping Cart</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
