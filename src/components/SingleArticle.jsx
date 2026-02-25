import { useParams } from "react-router";
import { fetchArticleById } from "../utils/fetchArticleData";
import { useEffect, useState } from "react";
import { CommentsList } from "./CommentsList";

export function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    async function getData() {
      const responseArticle = await fetchArticleById(article_id);
      setArticle(responseArticle);
    }
    getData();
  }, []);
  return (
    <section className="single-article-view">
      <h2>{article.title}</h2>
      <p>by: {article.author}</p>
      <p>{article.topic}</p>
      <p>{new Date(article.created_at).toLocaleString()}</p>
      <img src={`${article.article_img_url}`} alt="" />
      <p>{article.body}</p>
      <p>votes: {article.votes}</p>
      <CommentsList article_id={article_id} />
    </section>
  );
}
