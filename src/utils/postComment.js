import axios from "axios";
export async function postComment(article_id, username, body) {
  try {
    await axios.post(
      `https://nc-back-end.onrender.com/api/articles/${article_id}/comments`,
      { username, body },
    );
  } catch (err) {
    if (err.response.status === 404) {
      return "You are not logged in";
    }
    if (err.response.status === 400) {
      return "This comment is empty";
    }
  }
}
