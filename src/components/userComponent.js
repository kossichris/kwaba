import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";
import Card from "./card";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {users.loading && <p>Loading...</p>}
      {users.length === 0 && !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
      {users.length > 0 &&
        users.map((user) => <Card key={user.id} user={user} />)}
    </>
  );
};

export default Users;
