import axios from "axios";
export async function fetchTopicData() {
  const res = await axios.get("https://nc-back-end.onrender.com/api/topics");
  return res.data;
}
