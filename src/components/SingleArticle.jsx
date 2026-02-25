import { useParams } from "react-router";
import { fetchArticleById } from "../utils/fetchArticleData";
import { useEffect, useState } from "react";
import { fetchCommentData } from "../utils/fetchCommentData";

export function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState({});
  useEffect(() => {
    async function getData() {
      const responseArticle = await fetchArticleById(article_id);
      const responseComments = await fetchCommentData(article_id);
      setArticle(responseArticle);
      setComments(responseComments);
    }
    getData();
  }, []);
  console.log(comments);
  return (
    <section className="single-article-view">
      <h2>{article.title}</h2>
      <p>by: {article.author}</p>
      <p>{article.topic}</p>
      <p>{new Date(article.created_at).toLocaleString()}</p>
      <img src={`${article.article_img_url}`} alt="" />
      <p>{article.body}</p>
      <p>votes: {article.votes}</p>
      <section>
        <h3>comments</h3>
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
      </section>
    </section>
  );
}
