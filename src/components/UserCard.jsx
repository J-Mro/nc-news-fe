import { useContext } from "react";
import { UserContext } from "../contexts/User";
export function UserCard({ user }) {
  const { setLoggedInUser } = useContext(UserContext);
  return (
    <div>
      <button
        onClick={() => {
          setLoggedInUser(user);
        }}
      >
        <h4>{user.username}</h4>
        <img src={`${user.avatar_url}`} alt="user profile picture" />
      </button>
    </div>
  );
}
