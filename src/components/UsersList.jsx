import { fetchUserData } from "../utils/fetchUserData";
import { useEffect, useState } from "react";
export function UsersList() {
  const [users, setUsers] = useState([]);
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
      {users.length !== 0 &&
        users.map((user, index) => {
          return (
            <div>
              <h3>{user.username}</h3>
              <img src={`${user.avatar_url}`} alt="user profile picture" />
            </div>
          );
        })}
    </section>
  );
}
