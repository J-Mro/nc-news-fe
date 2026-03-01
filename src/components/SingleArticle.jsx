import { useParams } from "react-router";
import { fetchArticleById } from "../utils/fetchArticleData";
import { useEffect, useState } from "react";
import { CommentsList } from "./CommentsList";
import { ArticleLikeBtn } from "./ArticleLikeBtn";
import { NotFoundError } from "./NotFoundError";
import { useLoadingError } from "../hooks/useLoadingError";

export function SingleArticle() {
  const { article_id } = useParams();
  const [data, setData, isLoading, error] = useLoadingError(fetchArticleById, {
    params: [article_id],
  });
  const [voteChange, setVoteChange] = useState(0);
  const article = data;
  if (isLoading || error) {
    return (
      <section>
        {isLoading ? <p>Loading</p> : <NotFoundError resource={"article"} />}
      </section>
    );
  }
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
        setArticleState={setData}
      />
      <CommentsList article_id={article_id} />
    </section>
  );
}
