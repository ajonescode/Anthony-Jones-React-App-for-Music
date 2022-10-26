import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link } from 'react-router-dom';
import Title from './Components/Trackview';

const OldHits = () => {
  return (
    <div>
  
      <Title name="Bandino Music" />
      <Navbar />

      <Trackview
        Trackname="24 hrs"
        AudioTrack="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/24hrs.wav"
        Picture="https://anthonyjonesphotolife.s3.us-east-2.amazonaws.com/Photos/pnghut_spaceflight-illustration-wall-clock-aerospace-science-and-technology-space-distant.png"
      />
      <Trackview
        Trackname="41 Lake Park"
        AudioTrack="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/41lakepark.mp3"
      />
      <Trackview
        Trackname="69 Butterflies"
        AudioTrack="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/69+butterflies+187+%5BNo+808%5D_Master.wav"
      />
      <Trackview
        Trackname="Bandino Mayhem 3"
        AudioTrack="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/bandinomayhem3.wav"
      />
      <Trackview
        Trackname="Fly prod. By Bandino"
        AudioTrack="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/fly+prod+bandino+88_Master.wav"
      />
    </div>
  );
};

export default OldHits;
