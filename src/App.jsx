import "./App.css";
import { Header } from "./components/Header";
import { ArticlesList } from "./components/ArticlesList";
import { SingleArticle } from "./components/SingleArticle";
import { Routes, Route } from "react-router";
import { UserProvider } from "./contexts/User";
import { UsersList } from "./components/UsersList";
import { Nav } from "./components/Nav";
import { TopicsList } from "./components/TopicsList";
import { SingleTopicList } from "./components/SingleTopicList";
import { NotFoundError } from "./components/NotFoundError";

function App() {
  return (
    <UserProvider>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/topics/:topic" element={<SingleTopicList />} />
        <Route path="*" element={<NotFoundError resource={"page"} />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
