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
      <span className="article-card-author">
        <p>{author}</p>
      </span>
      <h3>{title}</h3>
      <span className="article-card-date">
        <p>{new Date(created_at).toLocaleString()}</p>
      </span>

      <img src={`${article_img_url}`} alt="article picture" width={400} />
      <span className="article-likes">
        <p>👍 {votes}</p>
      </span>
      <span className="article-comment-count">
        <p>💬 {comment_count}</p>
      </span>
    </section>
  );
}
