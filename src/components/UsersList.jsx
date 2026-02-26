import { fetchUserData } from "../utils/fetchUserData";
import { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
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
      <h3>Who's browsing?</h3>
      {users.length !== 0 &&
        users.map((user, index) => {
          return <UserCard user={user} />;
        })}
    </section>
  );
}
