import axios from "axios";

export async function patchArticleVotes(article_id, reqBody) {
  const res = await axios.patch(
    `https://nc-back-end.onrender.com/api/articles/${article_id}`,
    reqBody,
  );
  return;
}
