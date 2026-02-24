import { useParams } from "react-router";
import { fetchArticleById } from "../utils/fetchArticleData";
import { useEffect, useState } from "react";

export function SingleArticle({ articleData }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetchArticleById(article_id);
      setArticle(response);
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
    </section>
  );
}
