import { LIFECYCLE } from 'redux-pack';

import { FETCH_WEATHER } from '../../actions';
import CityNameReducer from '../cityName-reducer';

import makePackAction from './makePackAction';

test('should handle a FETCH_WEATHER action to update the cityName in the store', () => {
  const initialState = 'Paris';
  const expectedEndState = 'Le Havre';

  const action = makePackAction(LIFECYCLE.SUCCESS, {
    type: FETCH_WEATHER,
    payload: {
      json: { city: { name: 'Le Havre' } },
      res: { ok: true },
    },
  });

  const endState = CityNameReducer(initialState, action);

  expect(endState).toEqual(expectedEndState);
});
