import "./App.css";
import { useReducer, useState } from "react";
import videoData from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  //console.log("Render App");

  // const [videos, setVideos] = useState(videoData);
  const [editableVideo, setEditableVideo] = useState(null);

  // action: {type: add, payload: data}
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

  const editVideo = (id) => {
    setEditableVideo(videos.find((video) => video.id === id));
  };

  return (
    <>
      <div className="App" onClick={() => console.log("APP")}>
        <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
        <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos} />
      </div>
    </>
  );
}

export default App;
