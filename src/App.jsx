import "./App.css";
import { Header } from "./components/Header";
import { ArticlesList } from "./components/ArticlesList";
import { SingleArticle } from "./components/SingleArticle";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
