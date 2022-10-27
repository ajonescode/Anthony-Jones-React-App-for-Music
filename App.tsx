import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OldHits from './OldHits';
import Title from './Title';
import Header from './Header';
import Home from './Home';
import NewestBangers from './NewestBangers';

export default function App() {
  return (
    <div>
      <Title name = "Bandino Music" />
      <Header />
      <NewestBangers />
    </div>
  );
}
