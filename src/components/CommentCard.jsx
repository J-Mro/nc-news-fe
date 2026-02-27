import { useContext } from "react";
import { UserContext } from "../contexts/User";

export function CommentCard({ comment }) {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <p>{new Date(comment.created_at).toLocaleString()}</p>
      <p>{comment.body}</p>
      <p>by: {comment.author}</p>
      <p>votes: {comment.votes}</p>
      {loggedInUser.username === comment.author && <button>Delete</button>}
    </div>
  );
}
