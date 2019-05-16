import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey
const isAuthorized = handleActions(
  {
    [addApiKey]: () => true
  },
  false
);

const apiKey = handleActions(
  {
    [addApiKey]: (_, action) => action.payload
  },
  ''
);

export default combineReducers({
  isAuthorized,
  apiKey
});

export const getApiKey = state => state.auth.apiKey;

export const getIsAuthorized = state => state.auth.isAuthorized;
