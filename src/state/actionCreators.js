import axios from 'axios';

const url = 'http://localhost:4000/users';

export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await axios.get(url);
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
    const response = await axios.post(url, {
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
    const response = await axios.delete(url + `/${id}`);
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
    const response = await axios.get(url + `/${id}`);
    dispatch({
      type: 'DETAIL_USER',
      payload: { data: response.data },
    });
  };
};

export const editUser = ({ id, name }) => {
  return async (dispatch) => {
    const response = await axios.put(url + `/${id}`, {
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
