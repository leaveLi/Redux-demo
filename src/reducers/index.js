import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

const getAllUsers = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_ALL_USERS:
      return { ...state, ...action };
    case types.DEL_USER:
      delete state.allUsers[action.user.id];
      return { ...state };
    default:
      return state;
  }
};

export default combineReducers({
  getAllUsers,
});

export const getUserList = (state) => {
  const allUsers = state.allUsers || {};
  const arr = [];
  for (const key in allUsers) {
    arr.push(allUsers[key]);
  }
  return arr;
};
