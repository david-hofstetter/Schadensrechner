import { Outlet, Link } from "react-router-dom";
import React from "react";
import './stylesheet.css';


const Layout = () => {
  return (
    
    <>
      <nav>
        <ul class="navbar">
          <li>
            <Link class="linkname" to="/">Home</Link>
          </li>
          <li>
            <Link class="linkname" to="/calculator">Schadensrechner</Link>
          </li>
          <li>
            <Link class="linkname" to="/about">About</Link>
          </li>
        
        </ul>
      </nav>
      <Outlet/>
    </>
    
    
  )
};

export default Layout;