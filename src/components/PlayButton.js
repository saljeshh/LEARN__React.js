import React from "react";
import "./PlayButton.css";

const PlayButton = ({ children, onPlay, onPause }) => {
  let playing = false;

  function handleClick(e) {
    e.preventPropagation();

    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    playing = !playing;
  }

  return (
    <>
      {/* this will get called always as its expression so we need to write handler functions */}
      {/* <button onClick={console.log("play")}>Play</button> */}
      <button onClick={handleClick}>{children}</button>
    </>
  );
};

export default PlayButton;
