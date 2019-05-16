import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
  },
  false
);

const data = handleActions(
  {
    [fetchRequest]: () => {},
    [fetchSuccess]: (state, action) => action.payload
  },
  {}
);

const error = handleActions(
  {
    [fetchRequest]: () => null,
    [fetchFailure]: (state, action) => action.payload
  },
  null
);

export default combineReducers({ isLoading, data, error });

export const getIsLoading = state => state.followers.isLoading;
export const getData = state => state.followers.data;
export const getError = state => state.followers.error;
