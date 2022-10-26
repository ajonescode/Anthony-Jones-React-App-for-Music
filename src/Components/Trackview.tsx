import * as React from 'react';

const Trackview = (props) => {
return(
  <div>
    <figcaption>
      <span class="name-box">{props.Trackname}</span>
    </figcaption>
    <img
        class="small-pic"
        src={props.Picture}
        alt=""
      />
    <audio controls>
      <source src={props.AudioTrack}></source>
    </audio>
  </div>
);
};

export default Trackview