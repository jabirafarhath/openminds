import "./Forum.css";
import Post from "../../components/Post/Post";

function Forum() {
  return (
    <div className="forum_page">
      <div className="input-div">
        <textarea
          type="text"
          className="input-text"
          placeholder="Share your thoughts here.."
        />
        <button className="btn">Post</button>
      </div>
      <Post />
    </div>
  );
}

export default Forum;
