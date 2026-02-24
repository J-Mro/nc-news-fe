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
    <section>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{created_at}</p>
    </section>
  );
}
