import React, { useRef, useState } from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { video } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevState) => {
      return !prevState;
    });

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={video}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
      />
      <div className={ !playVideo ? "app__video-overlay flex__center" : "app__video-overlay flex__center video__playing" }>
        <div
          className={ !playVideo ? "app__video-overlay_circle flex__center" : "" }
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="rgba(255, 255, 255, 0.3)" fontSize={50} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
