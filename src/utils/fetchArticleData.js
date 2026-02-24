export function fetchArticleData() {
  return fetch("https://nc-back-end.onrender.com/api/articles").then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch articles",
      });
    }

    return res.json();
  });
}
export function fetchArticleById(article_id) {
  return fetch(
    `https://nc-back-end.onrender.com/api/articles/${article_id}`,
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch article",
      });
    }

    return res.json();
  });
}
