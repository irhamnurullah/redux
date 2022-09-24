import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailUser, editUser } from '../../state/actionCreators';

export default function EditUser() {
  const [name, setName] = useState('');
  const { id } = useParams();
  const { detailData } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailUser(id));
  }, []);

  useEffect(() => {
    dispatch(detailUser(id));
  }, [detailData]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(editUser({ id, name }));
    setName('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={detailData.name} onChange={handleChange} value={name} />
        <button type="submit">submit</button>
      </form>
      <div>nama : {detailData.name}</div>
    </>
  );
}
