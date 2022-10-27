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
        <Link to='/'> Home </Link>
        </li>
        <li>
         <Link to ='/NewestBangers'> Newest Bangers </Link>
        </li>
      </ul>
    </nav>
  </header>
</div>
)

};

export default Header
