import { useState, useEffect } from "react";
import { fetchTopicData } from "../utils/fetchTopicData";

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
            <div>
              <img src={`${topic.img_url}`} alt="" />
              <h3>{topic.slug}</h3>
              <p>{topic.description}</p>
            </div>
          );
        })}
    </section>
  );
}
