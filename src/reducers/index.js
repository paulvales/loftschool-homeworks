import { combineReducers } from 'redux';
import search from './Search';
import shows from './Shows';

// Вам необходимо реализовать search и shows редьюсеры.
// Создайте соответствующие файлы.

export default combineReducers({
  search,
  shows
});
