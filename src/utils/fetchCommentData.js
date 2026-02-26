import axios from "axios";

export async function fetchCommentData(article_id) {
  const res = await axios.get(
    `https://nc-back-end.onrender.com/api/articles/${article_id}/comments`,
  );
  return res.data;
}
