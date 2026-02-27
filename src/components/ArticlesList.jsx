import { Link } from "react-router";
import { fetchArticleData } from "../utils/fetchArticleData";
import { ArticleCard } from "./ArticleCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "created_at",
  });
  const sorting = searchParams.get("sort_by");
  useEffect(() => {
    async function getData() {
      const response = await fetchArticleData(sorting);
      setArticles(response);
    }
    getData();
  }, [sorting]);
  function changeHandlerSorting(e) {
    setSearchParams({ sort_by: e.target.value });
  }

  return (
    <section>
      <h2>Articles</h2>
      <div className="article-list-query-btns">
        <select name="sort-by" id="sort-by" onChange={changeHandlerSorting}>
          <option value="created_at">Date</option>
          <option value="votes">Likes</option>
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
