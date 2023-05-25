import "./App.css";
import { useState } from "react";
import videoData from "./data/data";
import Video from "./components/Video";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";

function App() {
  console.log("Render App");

  const [videos, setVideos] = useState(videoData);

  function addVideoHandler() {
    setVideos([
      ...videos,
      {
        id: videoData.length + 1,
        title: "Three Js",
        channel: "Saljesh Codes",
        views: "41M",
        time: "2 months ago",
        verified: true,
      },
    ]);
  }

  return (
    <>
      <div className="App" onClick={() => console.log("APP")}>
        <div>
          <button onClick={addVideoHandler}>Add Video</button>
        </div>
        {videos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            verified={video.verified}
          >
            {/* use children in another video componenet */}
            <PlayButton
              onPlay={() => console.log("Playing..." + video.title)}
              onPause={() => console.log("Pausing..." + video.title)}
            >
              {video.title}
            </PlayButton>
          </Video>
        ))}
      </div>
      <Counter />
    </>
  );
}

export default App;
