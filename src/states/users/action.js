/* eslint-disable import/no-extraneous-dependencies */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

/**
 * @TODO: Define all the actions (creator) for the users state
 */
const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUserActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncReceiveUsers({ id, name, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveUserActionCreator,
  asyncReceiveUsers,
};
