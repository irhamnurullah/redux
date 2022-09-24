import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddUser from '../components/addUser';
import { deleteUser, fetchUsers } from '../state/actionCreators';

export default function User() {
  const { users, deleteData } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [deleteData]);

  function handleDelete(id) {
    dispatch(deleteUser(id));
  }

  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.length === 0 && 'Silahkan add data melalui inputan di bawah'}
        {users?.map((user, index) => (
          <div key={index}>
            {user.name}
            <button onClick={() => handleDelete(user.id)}>delete</button>
            <Link to={`/edit/${user.id}`}>
              <button>edit</button>
            </Link>

            <Link to={`/edit/${user.id}`}>
              <button>view</button>
            </Link>
          </div>
        ))}
      </div>

      <br />
      <hr />
      <AddUser />
    </div>
  );
}
