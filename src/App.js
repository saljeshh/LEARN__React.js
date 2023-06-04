import "./App.css";
import { useState } from "react";
import videoData from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  //console.log("Render App");

  const [videos, setVideos] = useState(videoData);

  const addVideos = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  return (
    <>
      <div className="App" onClick={() => console.log("APP")}>
        <AddVideo addVideos={addVideos} />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;
