export function TopicCard({ topic }) {
  return (
    <div>
      <img src={topic.img_url === "" ? null : `${topic.img_url}`} alt="" />
      <h3>{topic.slug}</h3>
      <p>{topic.description}</p>
    </div>
  );
}
