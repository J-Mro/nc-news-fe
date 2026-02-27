import { useState, useEffect } from "react";
import { fetchTopicData } from "../utils/fetchTopicData";
import { TopicCard } from "./TopicCard";
import { Link } from "react-router";

export function TopicsList() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetchTopicData();
      setTopics(res);
    }
    getData();
  }, []);
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
