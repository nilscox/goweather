import { LIFECYCLE } from 'redux-pack';
import * as moment from 'moment';

import { FETCH_WEATHER } from '../../actions';
import WeatherReducer from '../weather-reducer';

import makePackAction from './makePackAction';

test('should handle a FETCH_WEATHER action', () => {
  const initialState = null;

  const expectedEndState = [
    { date: moment('1993-02-10 12:05'), description: 'desc', humidity: 42, pressure: 69, temperature: 16 },
    { date: moment('2018-12-28 17:40'), description: 'csed', humidity: 99, pressure: 1024, temperature: -4 },
  ];

  const action = makePackAction(LIFECYCLE.SUCCESS, {
    type: FETCH_WEATHER,
    payload: {
      json: {
        list: [
          { dt_txt: '1993-02-10 12:05', weather: [{ description: 'desc' }], main: { humidity: 42, pressure: 69, temp: 16 } },
          { dt_txt: '2018-12-28 17:40', weather: [{ description: 'csed' }], main: { humidity: 99, pressure: 1024, temp: -4 } },
        ],
      },
      res: { ok: true },
    },
  });

  const endState = WeatherReducer(initialState, action);

  expect(endState).toEqual(expectedEndState);
});
