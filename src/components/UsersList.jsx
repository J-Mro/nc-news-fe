import { fetchUserData } from "../utils/fetchUserData";
import { UserCard } from "./UserCard";
import { useLoadingError } from "../hooks/useLoadingError";
export function UsersList() {
  const [data, setData, isLoading, error] = useLoadingError(fetchUserData, {});
  const users = data;
  if (isLoading || error) {
    return (
      <section>
        {isLoading ? <p>Loading...</p> : <h3>Couldn't fetch users 😔</h3>}
      </section>
    );
  } else {
    return (
      <section className="users-list-text">
        <h2>Users</h2>
        <h3>Who's browsing?</h3>
        <span className="user-cards">
          {users.length !== 0 &&
            users.map((user, index) => {
              return <UserCard user={user} />;
            })}
        </span>
      </section>
    );
  }
}
