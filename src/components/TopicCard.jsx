export function TopicCard({ topic }) {
  return (
    <div className="topic-card">
      <img
        src={
          topic.img_url === ""
            ? "images/computer-program-coding-screen_53876-138060.png"
            : `${topic.img_url}`
        }
        alt={`image of ${topic.slug}`}
        width={600}
      />
      <h3>{topic.slug}</h3>
      <p>{topic.description}</p>
    </div>
  );
}
