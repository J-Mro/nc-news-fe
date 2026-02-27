import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { deleteComment } from "../utils/deleteComment";

export function CommentCard({ comment }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  function handleClick() {
    async function removePost() {
      await deleteComment(comment.comment_id);
      setIsDeleted(true);
    }
    removePost();
  }
  if (!isDeleted) {
    return (
      <div>
        <p>{new Date(comment.created_at).toLocaleString()}</p>
        <p>{comment.body}</p>
        <p>by: {comment.author}</p>
        <p>votes: {comment.votes}</p>
        {loggedInUser.username === comment.author && (
          <button onClick={handleClick}>Delete</button>
        )}
      </div>
    );
  } else {
    return <div>You've deleted this post. Goodbye, post! 👋</div>;
  }
}
