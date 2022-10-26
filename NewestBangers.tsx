import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link } from 'react-router-dom';
import './style.css';
import Title from './Title';
import Navbar from './Navbar';
import Trackview from './Trackview';

const NewestBangers = () => {
  return (
    <div>
      <Title name="Bandino Music" />
      <Navbar />
    </div>
  );
};
