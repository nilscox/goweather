import { handle } from 'redux-pack';

import { FETCH_WEATHER } from '../actions';

const cityName = (state: any = null, action: any) => {
  if (action.type === FETCH_WEATHER) {
    return handle(state, action, {
      success: prevState => {
        const { res, json } = action.payload;

        if (!res.ok)
          return state;

        return json.city.name;
      },
    });
  }

  return state;
};

export default cityName;
