import "./App.css";
import { Video } from "./components/Video";

function App() {
  const videos = [
    {
      id: 1,
      title: "React Js",
      channel: "Saljesh Codes",
      views: "12M",
      time: "2 years ago",
      verified: true,
    },
    {
      id: 2,
      title: "Node Js",
      channel: "Saljesh Codes",
      views: "2M",
      time: "11 months ago",
      verified: false,
    },
    {
      id: 3,
      title: "Express Js",
      channel: "Saljesh Codes",
      views: "4M",
      time: "2 months ago",
      verified: true,
    },
    {
      id: 4,
      title: "Mongo db",
      channel: "Saljesh Codes",
      views: "900K",
      time: "6 months ago",
      verified: false,
    },
  ];

  return (
    <div className="App">
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
        />
      ))}

      {/* <Video {...object[1]} /> */}
      {/* <Video
        title="Mongo db"
        channel="Saljesh Codes"
        views="890K"
        time="6 months ago"
        verified={1}
      />

      <Video
        title="Node js"
        channel="Saljesh Codes"
        views="1M"
        time="2 months ago"
        verified={false}
      /> */}
    </div>
  );
}

export default App;
