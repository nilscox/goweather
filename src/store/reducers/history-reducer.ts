import { LOAD_HISTORY } from '../actions';

const history = (state: any = [], action: any) => {
  if (action.type === LOAD_HISTORY)
    return action.history;

  return state;
};

export default history;
