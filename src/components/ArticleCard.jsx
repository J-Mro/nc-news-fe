export function ArticleCard({ articleData }) {
  const {
    author,
    title,
    topic,
    created_at,
    votes,
    article_img_url,
    comment_count,
  } = articleData;
  return (
    <section className="article-card">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{new Date(created_at).toLocaleString()}</p>
      <img src={`${article_img_url}`} alt="article picture" width={400} />
      <p>votes: {votes}</p>
      <p>comments: {comment_count}</p>
    </section>
  );
}
