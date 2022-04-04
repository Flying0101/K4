import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './css/App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Id from './components/Details';

import Register from './components/Register';
import LogIn from './components/LogIn';
import UserPage from './components/UserPage';
import Admin from './components/Admin';
import AllUsers from './components/AllUsers';


function App() {


  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<Id />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/alluser" element={<AllUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
