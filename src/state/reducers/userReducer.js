const initialState = {
  users: [],
  addData: [],
  deleteData: [],
  detailData: [],
  editData: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload.data,
      };
    case 'ADD_USER':
      return {
        ...state,
        addData: action.payload.data,
      };
    case 'DELETE_USER':
      return {
        ...state,
        deleteData: action.payload.data,
      };
    case 'DETAIL_USER':
      return {
        ...state,
        detailData: action.payload.data,
      };
    case 'EDIT_USER':
      console.log(action.payload.data);
      return {
        ...state,
        editData: action.payload.data,
      };
    default:
      return state;
  }
}
