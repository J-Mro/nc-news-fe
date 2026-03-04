import { LoginInfo } from "./LoginInfo";
import { Link } from "react-router";
export function Header() {
  return (
    <header className="header-component">
      <Link to="/">
        <h1 className="logo" id="nc-news-header-text">
          NorthStar<span className="logo-star">*</span>
        </h1>
      </Link>
      <LoginInfo />
    </header>
  );
}
