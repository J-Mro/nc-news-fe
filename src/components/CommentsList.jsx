import { useState, useEffect } from "react";
import { fetchCommentData } from "../utils/fetchCommentData";

export function CommentsList({ article_id }) {
  const [comments, setComments] = useState({});
  useEffect(() => {
    async function getData() {
      const responseComments = await fetchCommentData(article_id);
      setComments(responseComments);
    }
    getData();
  }, []);
  return (
    <>
      <h3>comments</h3>
      <section>
        {comments.comments && <p>count: {comments.comments.length}</p>}
      </section>
      {comments.comments &&
        comments.comments.map((comment, index) => {
          return (
            <div>
              <p>{new Date(comment.created_at).toLocaleString()}</p>
              <p>{comment.body}</p>
              <p>by: {comment.author}</p>
              <p>votes: {comment.votes}</p>
            </div>
          );
        })}
    </>
  );
}
