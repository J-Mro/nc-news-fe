import { fetchArticleData } from "../utils/fetchArticleData";
import { useEffect, useState } from "react";

export function ArticlesList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetchArticleData();
      setArticles(response);
    }
    getData();
  }, []);
  return (
    <section>
      <h2>Articles</h2>
      {articles.length !== 0 &&
        articles.map((article) => {
          return <p>{article.author}</p>;
        })}
    </section>
  );
}
