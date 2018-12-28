import { LOAD_HISTORY } from '../../actions';
import HistoryReducer from '../history-reducer';

test('should handle a LOAD_HISTORY action', () => {
  const initialState = [8];
  const expectedEndState = [1, 2, 3];

  const action = {
    type: LOAD_HISTORY,
    history: [1, 2, 3],
  };

  const endState = HistoryReducer(initialState, action);

  expect(endState).toEqual(expectedEndState);
});
