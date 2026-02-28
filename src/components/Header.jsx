import { LoginInfo } from "./LoginInfo";
import { Link } from "react-router";
export function Header() {
  return (
    <header>
      <Link to="/">
        <h1 id="nc-news-header-text">NC News</h1>
      </Link>
      <LoginInfo />
    </header>
  );
}
