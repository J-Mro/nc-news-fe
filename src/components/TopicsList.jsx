import { useState, useEffect } from "react";
import { fetchTopicData } from "../utils/fetchTopicData";
import { TopicCard } from "./TopicCard";

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
          return <TopicCard topic={topic} key={topic.slug + index} />;
        })}
    </section>
  );
}
