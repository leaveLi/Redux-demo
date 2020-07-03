import user from "../api/user";
import * as types from "../constants/ActionTypes";

const receiveAllUsers = (allUsers) => ({
  type: types.RECEIVE_ALL_USERS,
  allUsers,
});

export const getAllUsers = () => (dispatch) => {
  Promise.all([
    user.getUserNames(),
    user.getUserMails(),
    user.getUserStats(),
  ]).then((results) => {
    const allUsers = {};
    for (const result of results) {
      for (let user of result) {
        const { id } = user;
        allUsers[id] = allUsers[id] ? Object.assign(allUsers[id], user) : user;
      }
    }
    console.log(allUsers);
    dispatch(receiveAllUsers(allUsers));
  });
};

export const delUser = (user) => (dispatch, getState) => {
  // const { getAllUsers } = getState();
  dispatch({ type: types.DEL_USER, user });
};
