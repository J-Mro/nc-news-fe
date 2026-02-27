import { useState, useEffect } from "react";
import { fetchCommentData } from "../utils/fetchCommentData";
import { CommentForm } from "./CommentForm";
import { CommentCard } from "./CommentCard";

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
          return <CommentCard comment={comment} />;
        })}
      <CommentForm setComments={setComments} article_id={article_id} />
    </>
  );
}
