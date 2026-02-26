import axios from "axios";

export async function fetchUserData() {
  const res = await axios.get("https://nc-back-end.onrender.com/api/users");
  return res.data;
}
