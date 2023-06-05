import Video from "./Video";
import PlayButton from "./PlayButton";

const VideoList = ({ videos, deleteVideo, editVideo }) => {
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
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
    </>
  );
};

export default VideoList;
