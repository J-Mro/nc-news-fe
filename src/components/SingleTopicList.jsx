import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchArticlesByTopic } from "../utils/fetchArticleData";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router";

export function SingleTopicList() {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const { topic } = useParams();
  useEffect(() => {
    async function getData() {
      const res = await fetchArticlesByTopic(topic);
      setFilteredArticles(res);
    }
    getData();
  }, []);
  return (
    <section>
      <h2>Topic: {topic}</h2>
      {filteredArticles.length !== 0 &&
        filteredArticles.map((article, index) => {
          return (
            <Link to={`/articles/${article.article_id}`}>
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
