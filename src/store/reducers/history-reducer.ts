import { LOAD_HISTORY, CLEAR_HISTORY } from '../actions';

const history = (state: any = [], action: any) => {
  if (action.type === LOAD_HISTORY)
    return action.history;

  if (action.type === CLEAR_HISTORY)
    return [];

  return state;
};

export default history;
