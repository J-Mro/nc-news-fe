import axios from "axios";

export function fetchArticleData() {
  return axios
    .get("https://nc-back-end.onrender.com/api/articles")
    .then(({ data }) => {
      return data;
    });
}
export function fetchArticleById(article_id) {
  return axios
    .get(`https://nc-back-end.onrender.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    });
}
