import * as React from 'react';

const Trackview = (props) => {
return(
  <div>
    <figcaption>
      <span class="name-box">{props.Trackname}</span>
    </figcaption>
    <img
        class="small-pic"
        src=""
        alt=""
      />
    <audio controls>
      <source src="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/24hrs.wav"></source>
    </audio>
  </div>
);
};

export default Trackview