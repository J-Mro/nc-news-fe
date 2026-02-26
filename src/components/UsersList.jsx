import { UserContext } from "../contexts/User";
import { fetchUserData } from "../utils/fetchUserData";
import { useEffect, useState, useContext } from "react";

export function UsersList() {
  const [users, setUsers] = useState([]);
  const { setLoggedInUser } = useContext(UserContext);
  useEffect(() => {
    async function getData() {
      const res = await fetchUserData();
      setUsers(res);
    }
    getData();
  }, []);

  return (
    <section>
      <h2>Users</h2>
      <h3>Who's browsing?</h3>
      {users.length !== 0 &&
        users.map((user, index) => {
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
        })}
    </section>
  );
}
