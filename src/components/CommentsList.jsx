import { fetchCommentData } from "../utils/fetchCommentData";
import { CommentForm } from "./CommentForm";
import { CommentCard } from "./CommentCard";
import { useLoadingError } from "../hooks/useLoadingError";

export function CommentsList({ article_id }) {
  const [data, setData, isLoading, error] = useLoadingError(fetchCommentData, {
    params: [article_id],
  });
  const comments = data;
  const setComments = setData;
  if (isLoading || error) {
    return (
      <section>
        {isLoading ? <p>Loading...</p> : <p>Couldn't fetch comments 😔</p>}
      </section>
    );
  }
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
