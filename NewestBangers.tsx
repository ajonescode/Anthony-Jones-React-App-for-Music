import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link } from 'react-router-dom';
import './style.css';
import Title from './Title';
import Header from './Header';
import Trackview from './Trackview';

const NewestBangers = () => {
  return (
    <div>

      <section class="music-block">
        <Trackview
          Trackname="Fly prod. By Bandino"
          AudioTrack="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/fly+prod+bandino+88_Master.wav"
        />
      </section>
    </div>
  );
};

export default NewestBangers