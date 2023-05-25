import "./App.css";
import videos from "./data/data";
import Video from "./components/Video";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div className="App" onClick={() => console.log("APP")}>
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

      {/* <PlayButton
        title="Play"
        onPlay={() => console.log("Play")}
        onPause={() => console.log("Pause")}
      /> */}
      {/* <PlayButton title="Pause" onClick={() => alert("Pause")} /> */}
    </div>
  );
}

export default App;
