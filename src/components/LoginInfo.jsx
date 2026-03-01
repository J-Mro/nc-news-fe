import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Link } from "react-router";

export function LoginInfo() {
  const { loggedInUser } = useContext(UserContext);
  if (loggedInUser.username === undefined) {
    return (
      <Link to="/users">
        <button>Log In</button>
      </Link>
    );
  }
  return (
    <Link to="/users">
      <section className="logged-in-icon">
        <img src={`${loggedInUser.avatar_url}`} alt="user profile picture" />
        <p>{loggedInUser.username}</p>
      </section>
    </Link>
  );
}
