import React, { useState } from "react";
import "./PlayButton.css";

const PlayButton = ({ children, onPlay, onPause }) => {
  const [playing, setPlaying] = useState(false);

  function handleClick(e) {
    e.stopPropagation();

    if (playing) {
      onPause();
    } else {
      onPlay();
    }

    setPlaying(!playing);
  }

  return (
    <>
      {/* this will get called always as its expression so we need to write handler functions */}
      {/* <button onClick={console.log("play")}>Play</button> */}
      <button onClick={handleClick}>
        {children} {playing ? "⏸" : "▶"}
      </button>
    </>
  );
};

export default PlayButton;
