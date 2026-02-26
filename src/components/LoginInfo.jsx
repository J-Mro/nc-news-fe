import { useContext } from "react";
import { UserContext } from "../contexts/User";

export function LoginInfo() {
  const { loggedInUser } = useContext(UserContext);
  if (loggedInUser.username === undefined) {
  }
  return (
    <section>
      <p>{loggedInUser.username}</p>
      <img src={`${loggedInUser.avatar_url}`} alt="user profile picture" />
    </section>
  );
}
