/**
 * @TODO: Create Redux store
 */
/* eslint-disable import/no-extraneous-dependencies */

import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import isPreloadReducers from './isPreload/reducer';
import authUserReducers from './authUser/reducer';
import usersReducer from './users/reducer';
import talksReducer from './talks/reducer';
import talkDetailReducers from './talkDetail/reducer';

const store = configureStore({
  reducer: {
    isPreload: isPreloadReducers,
    authUser: authUserReducers,
    users: usersReducer,
    talks: talksReducer,
    talkDetail: talkDetailReducers,
    loadingBar: loadingBarReducer,
  },
});

export default store;
