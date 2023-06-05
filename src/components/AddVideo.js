import "./AddVideo.css";
import { useEffect, useState } from "react";

const initialState = {
  time: "2 minutes ago",
  channel: "Aney Codes",
  verified: false,
  title: "",
  views: "",
};

const AddVideo = ({ addVideos, updateVideos, editableVideo }) => {
  const [video, setVideo] = useState(initialState);

  // runs when component mount/render happens
  useEffect(() => {
    //console.log("Effect");
    if (editableVideo) {
      // when editablevideo is not null only run or error, null.title// hunxa tala form ma
      setVideo(editableVideo);
    }
  }, [editableVideo]);

  function handleSubmit(e) {
    e.preventDefault();

    if (editableVideo) {
      updateVideos(video);
    } else {
      addVideos(video);
    }
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
        {editableVideo ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default AddVideo;
