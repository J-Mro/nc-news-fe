import { Link } from "react-router";
import { fetchArticleData } from "../utils/fetchArticleData";
import { ArticleCard } from "./ArticleCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "created_at",
    order: "desc",
  });
  const sorting = searchParams.get("sort_by");
  const order = searchParams.get("order");
  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      const response = await fetchArticleData(sorting, order);
      setArticles(response);
      setIsLoading(false);
    }
    getData();
  }, [searchParams]);
  function changeHandlerSorting(e) {
    setSearchParams({ sort_by: e.target.value, order: order });
  }
  function changeHandlerOrder(e) {
    setSearchParams({ sort_by: sorting, order: e.target.value });
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <section>
      <h2>Articles</h2>
      <div className="article-list-query-btns">
        <select name="sort-by" id="sort-by" onChange={changeHandlerSorting}>
          <option value="created_at">Date</option>
          <option value="votes">Likes</option>
        </select>
        <select name="order" id="order" onChange={changeHandlerOrder}>
          <option value="desc">
            {sorting === "created_at" ? "Latest" : "Descending"}
          </option>
          <option value="asc">
            {sorting === "created_at" ? "Oldest" : "Ascending"}
          </option>
        </select>
      </div>
      {articles.length !== 0 &&
        articles.map((article, index) => {
          return (
            <Link to={`/articles/${article.article_id}`}>
              <ArticleCard
                key={`${index}+${article.title}`}
                articleData={article}
              />
            </Link>
          );
        })}
    </section>
  );
}
