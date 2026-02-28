import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchArticlesByTopic } from "../utils/fetchArticleData";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router";
import { NotFoundError } from "./NotFoundError";

export function SingleTopicList() {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [errStatus, setErrStatus] = useState(200);
  const { topic } = useParams();
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetchArticlesByTopic(topic);
        setFilteredArticles(res);
      } catch (err) {
        setErrStatus(err.status);
      }
    }
    getData();
  }, []);
  if (errStatus !== 200) {
    return <NotFoundError resource={"topic"} />;
  } else {
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
}
