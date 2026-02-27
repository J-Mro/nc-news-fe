import axios from "axios";

export async function fetchArticleData(sort_by, order) {
  const res = await axios.get(
    `https://nc-back-end.onrender.com/api/articles?sort_by=${sort_by}&order=${order}`,
  );
  return res.data;
}

export async function fetchArticleById(article_id) {
  const res = await axios.get(
    `https://nc-back-end.onrender.com/api/articles/${article_id}`,
  );
  return res.data;
}

export async function fetchArticlesByTopic(topic) {
  const res = await axios.get(
    `https://nc-back-end.onrender.com/api/articles?topic=${topic}`,
  );
  return res.data;
}
