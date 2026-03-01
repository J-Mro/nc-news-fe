import { Link } from "react-router";
import { fetchArticleData } from "../utils/fetchArticleData";
import { ArticleCard } from "./ArticleCard";
import { useSearchParams } from "react-router";
import { useLoadingError } from "../hooks/useLoadingError";

export function ArticlesList() {
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "created_at",
    order: "desc",
  });
  const sorting = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const [data, setData, isLoading, error] = useLoadingError(fetchArticleData, {
    dependencies: [searchParams],
    params: [sorting, order],
  });
  const articles = data;

  function changeHandlerSorting(e) {
    setSearchParams({ sort_by: e.target.value, order: order });
  }
  function changeHandlerOrder(e) {
    setSearchParams({ sort_by: sorting, order: e.target.value });
  }
  if (isLoading || error) {
    return (
      <section>
        {isLoading ? <p>Loading...</p> : <p>Couldn't fetch articles 😔</p>}
      </section>
    );
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
