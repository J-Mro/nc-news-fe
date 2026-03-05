import { fetchTopicData } from "../utils/fetchTopicData";
import { TopicCard } from "./TopicCard";
import { Link } from "react-router";
import { useLoadingError } from "../hooks/useLoadingError";

export function TopicsList() {
  const [data, setData, isLoading, error] = useLoadingError(fetchTopicData, {});
  const topics = data;
  if (isLoading || error) {
    return (
      <section className="loading-error">
        {isLoading ? <p>Loading...</p> : <h3>Couldn't fetch topics 😔</h3>}
      </section>
    );
  }
  return (
    <section className="topics-list">
      <h2 className="topics-header">Topics</h2>
      {topics.length !== 0 &&
        topics.map((topic, index) => {
          return (
            <Link to={`/topics/${topic.slug}`}>
              <TopicCard topic={topic} key={topic.slug + index} />
            </Link>
          );
        })}
    </section>
  );
}
