import React, { useState, useContext } from "react";
import "./PlayButton.css";
import ThemeContext from "../context/ThemeContext";

const PlayButton = ({ children, onPlay, onPause }) => {
  const [playing, setPlaying] = useState(false);
  const themeChange = useContext(ThemeContext);

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
      <button className={`${themeChange}`} onClick={handleClick}>
        {children} {playing ? "⏸" : "▶"}
      </button>
    </>
  );
};

export default PlayButton;
