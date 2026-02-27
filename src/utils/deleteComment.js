import axios from "axios";
export async function deleteComment(comment_id) {
  const res = await axios.delete(
    `https://nc-back-end.onrender.com/api/comments/${comment_id}`,
  );
  return res.status;
}
