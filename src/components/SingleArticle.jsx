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
    <section>
      <h2>hello</h2>
      <h2>{article.title}</h2>
      <p>{article.topic}</p>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      <img src={`${article.article_img_url}`} alt="" />
      <p>{article.body}</p>
      <p>{article.votes}</p>
      <p>{article.comments}</p>
    </section>
  );
}
