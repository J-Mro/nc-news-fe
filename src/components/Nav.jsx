import { Link } from "react-router";

export function Nav() {
  return (
    <nav className="nav-buttons">
      <Link to="/">
        <h2>🏠 Home</h2>
      </Link>
      <Link to="/users">
        <h2>👤 Users</h2>
      </Link>
      <Link to="/topics">
        <h2>💡 Topics</h2>
      </Link>
    </nav>
  );
}
