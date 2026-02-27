import { useState } from "react";
import { postComment } from "../utils/postComment";
import { fetchCommentData } from "../utils/fetchCommentData";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export function CommentForm({ setComments, article_id }) {
  const [commentBody, setCommentBody] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const { loggedInUser } = useContext(UserContext);
  function handleChange(e) {
    setCommentBody(e.target.value);
  }
  async function postData() {
    setStatusMsg("");
    const username = loggedInUser.username;
    const body = commentBody;
    const res = await postComment(article_id, username, body);
    setStatusMsg(res);
  }
  console.log("status message current state:", statusMsg);
  return (
    <form>
      <label>
        Post a comment:
        <input
          type="text"
          value={commentBody}
          placeholder="Share your thoughts"
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => {
            console.log("Hey im clicked");
            postData();
          }}
        >
          Post
        </button>
      </label>
      {statusMsg !== "" && <p>{statusMsg}</p>}
    </form>
  );
}
