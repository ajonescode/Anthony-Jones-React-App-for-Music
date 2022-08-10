import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Bandino Music</h1>

      <figcaption>24 hrs prod. By Bandino</figcaption>
      <audio controls>
        <source src="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/24hrs.wav"></source>
      </audio>
      <figcaption>41 Lake Park</figcaption>
      <audio controls>
        <source src="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/41lakepark.mp3"></source>
      </audio>

     
    
      <figcaption> 69 Butterflies</figcaption>
      <audio controls>
        <source src="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/69+butterflies+187+%5BNo+808%5D_Master.wav"></source>
      </audio>
     
      <figcaption>Bandino Mayhem 3</figcaption>
      <audio controls>
        <source src="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/bandinomayhem3.wav"></source>
      </audio>
     
      <figcaption></figcaption>
      <audio controls>
        <source src=""></source>
      </audio>
      <figcaption>Fly prod. By Bandino</figcaption>
      <audio controls>
        <source src="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/fly+prod+bandino+88_Master.wav"></source>
      </audio>
    </div>
  );
}
