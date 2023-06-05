import "./App.css";
import { useContext, useReducer, useState } from "react";
import videoData from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("darkMode");
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((v) => v.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        // always work on copy of state, never change it directly
        const newVideos = [...videos];
        // first create newVideos of spread array then only splice otherwise it will return only one value
        // some are mutated some are not
        newVideos.splice(index, 1, action.payload);
        //console.log(newVideos);
        setEditableVideo(null);
        //setVideos(newVideos);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoData);

  const themeContext = useContext(ThemeContext);
  console.log({ themeContext });

  const editVideo = (id) => {
    setEditableVideo(videos.find((video) => video.id === id));
  };

  return (
    <>
      <ThemeContext.Provider value={mode}>
        <button
          onClick={() => {
            setMode(mode === "darkMode" ? "lightMode" : "darkMode");
          }}
        >
          Change
        </button>
        <div className={`App ${mode}`} onClick={() => console.log("APP")}>
          <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
          <VideoList
            dispatch={dispatch}
            editVideo={editVideo}
            videos={videos}
          />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
