import * as React from 'react';
import ReactDOM from "react-dom/client";
import './style.css';
import {Link} from "react-router-dom";


const Header = () => {
return(
  <div>
  <header>
    <nav>
      <ul>
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

export default Header
