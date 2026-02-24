// import axios from "axios";
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
