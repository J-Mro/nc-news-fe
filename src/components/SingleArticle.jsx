import { useParams } from "react-router";
import { fetchArticleById } from "../utils/fetchArticleData";
import { useEffect, useState } from "react";
import { CommentsList } from "./CommentsList";
import { ArticleLikeBtn } from "./ArticleLikeBtn";

export function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [voteChange, setVoteChange] = useState(0);
  useEffect(() => {
    async function getData() {
      const responseArticle = await fetchArticleById(article_id);
      setArticle(responseArticle);
    }
    getData();
  }, []);

  return (
    <section className="single-article-view">
      <h2>{article.title}</h2>
      <p>by: {article.author}</p>
      <p>{article.topic}</p>
      <p>{new Date(article.created_at).toLocaleString()}</p>
      <img src={`${article.article_img_url}`} alt="" />
      <p>{article.body}</p>
      <p>votes: {article.votes + voteChange}</p>
      <ArticleLikeBtn
        setVoteChangeState={setVoteChange}
        article_id={article_id}
        article={article}
        setArticleState={setArticle}
      />
      <CommentsList article_id={article_id} />
    </section>
  );
}
