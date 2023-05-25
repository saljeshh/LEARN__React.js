import "./Video.css";

function Video({ title, channel, views, time, verified, id, children }) {
  return (
    <div className="container">
      <div className="pic">
        <img src={`https://picsum.photos/id/${id}/160/90`} alt="img" />
      </div>
      <div className="title">{title} Masterclass</div>
      <div className="channel">
        {channel} {verified && "✔"}
      </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      {children}
    </div>
  );
}

export default Video;
