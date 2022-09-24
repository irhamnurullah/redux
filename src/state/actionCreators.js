import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:4000/users');
    dispatch({
      type: 'SET_USERS',
      payload: {
        data: response.data,
      },
    });
  };
};

export const addUser = (name) => {
  return async (dispatch) => {
    const response = await axios.post('http://localhost:4000/users', {
      name,
    });
    dispatch({
      type: 'ADD_USER',
      payload: {
        data: response.data,
      },
    });
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    const response = await axios.delete(`http://localhost:4000/users/${id}`);
    dispatch({
      type: 'DELETE_USER',
      payload: {
        data: response.data,
      },
    });
  };
};

export const detailUser = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:4000/users/${id}`);
    dispatch({
      type: 'DETAIL_USER',
      payload: { data: response.data },
    });
  };
};

export const editUser = ({ id, name }) => {
  return async (dispatch) => {
    const response = await axios.put(`http://localhost:4000/users/${id}`, {
      name,
      id,
    });
    dispatch({
      type: 'EDIT_USER',
      payload: {
        data: response.data,
      },
    });
  };
};
