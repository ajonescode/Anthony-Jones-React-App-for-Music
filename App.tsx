import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Bandino Music</h1>
      <figcaption>Fly prod. By Bandino</figcaption>
      <audio controls>
        <source src="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/fly+prod+bandino+88_Master.wav"></source>
      </audio>
    </div>
  );
}
