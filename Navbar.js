import * as React from 'react';
import ReactDOM from "react-dom/client";
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Navbar = () => {
return(
  <div>
  <header>
    <nav>
      <ul>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="#">Newest Bangers</a>
        </li>
        <li>
          <a href="#">Old Hits</a>
        </li>
      </ul>
    </nav>
  </header>
</div>
)

};

export default Navbar
