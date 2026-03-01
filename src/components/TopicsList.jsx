import { fetchTopicData } from "../utils/fetchTopicData";
import { TopicCard } from "./TopicCard";
import { Link } from "react-router";
import { useLoadingError } from "../hooks/useLoadingError";

export function TopicsList() {
  const [data, setData, isLoading, error] = useLoadingError(fetchTopicData, {});
  const topics = data;
  if (isLoading || error) {
    return (
      <section>
        {isLoading ? <p>Loading...</p> : <p>Couldn't fetch topics 😔</p>}
      </section>
    );
  }
  return (
    <section>
      <h2>Topics</h2>
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
