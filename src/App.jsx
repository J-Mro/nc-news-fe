import "./App.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { ArticlesList } from "./components/ArticlesList";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<ArticlesList />} />
      </Routes>
    </>
  );
}

export default App;
