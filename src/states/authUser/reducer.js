import { ActionType } from './action';

/**
 * @TODO: Define the reducer for the authUser state
 */
function authUserReducers(authUser = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionType.UNSET_AUTH_USER:
      return action.payload.authUser;
    default:
      return authUser;
  }
}

export default authUserReducers;
