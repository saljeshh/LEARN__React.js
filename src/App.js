import "./App.css";
import { useState } from "react";
import videoData from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  //console.log("Render App");

  const [videos, setVideos] = useState(videoData);
  const [editableVideo, setEditableVideo] = useState(null);

  const addVideos = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  const editVideo = (id) => {
    setEditableVideo(videos.find((video) => video.id === id));
  };

  const updateVideos = (video) => {
    const index = videos.findIndex((v) => v.id === video.id);
    // always work on copy of state, never change it directly
    const newVideos = [...videos];
    // first create newVideos of spread array then only splice otherwise it will return only one value
    // some are mutated some are not
    newVideos.splice(index, 1, video);
    console.log(newVideos);
    setVideos(newVideos);
  };

  return (
    <>
      <div className="App" onClick={() => console.log("APP")}>
        <AddVideo
          addVideos={addVideos}
          updateVideos={updateVideos}
          editableVideo={editableVideo}
        />
        <VideoList
          deleteVideo={deleteVideo}
          editVideo={editVideo}
          videos={videos}
        />
      </div>
    </>
  );
}

export default App;
