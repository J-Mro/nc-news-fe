import axios from "axios";
export function fetchCommentData(article_id) {
  return axios
    .get(`https://nc-back-end.onrender.com/api/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
}
