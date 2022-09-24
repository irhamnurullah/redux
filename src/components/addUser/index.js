import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, fetchUsers } from '../../state/actionCreators';

export default function AddUser() {
  const [name, setName] = useState('');
  const { addData } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (addData) {
      dispatch(fetchUsers());
    }
  }, [dispatch, addData]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addUser(name));
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="input disini ..." value={name} onChange={handleChange} />
      <button type="submit">submit</button>
    </form>
  );
}
