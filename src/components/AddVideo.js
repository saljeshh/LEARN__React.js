import "./AddVideo.css";
import { useState } from "react";

const initialState = {
  time: "2 minutes ago",
  channel: "Aney Codes",
  verified: false,
  title: "",
  views: "",
};

const AddVideo = ({ addVideos }) => {
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initialState);
    //console.log(video);
  }

  function changeHandler(e) {
    //console.log(e);
    //console.log(e.target.value, e.target.name);
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={changeHandler}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={changeHandler}
        placeholder="views"
        value={video.views}
      />
      <button
        style={{ width: "150px", padding: "10px" }}
        onClick={handleSubmit}
      >
        Add Video
      </button>
    </form>
  );
};

export default AddVideo;
