import { combineReducers } from 'redux';

import cityName from './cityName-reducer';
import history from './history-reducer';
import weather from './weather-reducer';

export default combineReducers({
  cityName,
  history,
  weather,
});
