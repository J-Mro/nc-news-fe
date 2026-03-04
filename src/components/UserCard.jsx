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
        className="user-btn"
      >
        <img
          src={`${user.avatar_url}`}
          alt="user profile picture"
          width="250px"
          height="250px"
        />
      </button>
      <h4 className="user-name-user-page">{user.username}</h4>
    </div>
  );
}
