import * as React from 'react';
import './style.css';
import Navbar from './src/Components/Navbar.tsx';
import Trackview from './src/Components/Trackview.tsx';



export default function App() {
  return (
    <div>
  
    <Navbar />
    <Trackview Trackname = "24 hrs" AudioTrack = "https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/24hrs.wav"/>
    
    <section class="Music-Block">
    
    
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
