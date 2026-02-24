import { Link } from "react-router";
import { fetchArticleData } from "../utils/fetchArticleData";
import { ArticleCard } from "./ArticleCard";
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
        articles.map((article, index) => {
          return (
            <Link to={`/api/articles/${article.article_id}`}>
              <ArticleCard
                key={`${index}+${article.title}`}
                articleData={article}
              />
            </Link>
          );
        })}
    </section>
  );
}
