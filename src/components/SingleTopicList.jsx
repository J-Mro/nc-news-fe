import { useParams } from "react-router";
import { fetchArticlesByTopic } from "../utils/fetchArticleData";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router";
import { NotFoundError } from "./NotFoundError";
import { useLoadingError } from "../hooks/useLoadingError";

export function SingleTopicList() {
  const { topic } = useParams();
  const [data, setData, isLoading, error] = useLoadingError(
    fetchArticlesByTopic,
    {
      params: [topic],
    },
  );
  const filteredArticles = data;
  if (error) console.log(error.status);
  if (isLoading || error) {
    return (
      <section>
        <h2>Topic</h2>
        {isLoading ? <p>Loading...</p> : <NotFoundError resource={"topic"} />}
      </section>
    );
  }
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
