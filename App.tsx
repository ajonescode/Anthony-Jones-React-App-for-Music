import * as React from 'react';
import './style.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './src/Components/Title.tsx'


export default function App() {
  return (
    <div>
      
            
            <section class="Music-Block">
    
    <figcaption>
      <span class="name-box">24 hrs prod. By Bandino</span>
    </figcaption>
    <img
        class="small-pic"
        src=""
        alt=""
      />
    <audio controls>
      <source src="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/24hrs.wav"></source>
    </audio>
    <figcaption>
    <img
        class="small-pic"
        src=""
        alt=""
      />
      <span class="name-box">41 Lake Park</span>
    </figcaption>
    <audio controls>
      <source src="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/41lakepark.mp3"></source>
    </audio>

    <figcaption>
    <img
        class="small-pic"
        src=""
        alt=""
      />
      <span class="name-box">69 Butterflies</span>
    </figcaption>
    <audio controls>
      <source src="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/69+butterflies+187+%5BNo+808%5D_Master.wav"></source>
    </audio>

    <figcaption>
    <img
        class="small-pic"
        src=""
        alt=""
      />
      <span class="name-box">Bandino Mayhem 3</span>
    </figcaption>
    <audio controls>
      <source src="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/bandinomayhem3.wav"></source>
    </audio>
    
    <figcaption>Fly prod. By Bandino</figcaption>
    <audio controls>
      <source src="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/fly+prod+bandino+88_Master.wav"></source>
    </audio>
  </section>
    </div>
  );
}
