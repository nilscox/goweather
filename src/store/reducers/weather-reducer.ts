import { handle } from 'redux-pack';
import * as moment from 'moment';

import { FETCH_WEATHER } from '../actions';

const weather = (state: any = null, action: any) => {
  if (action.type === FETCH_WEATHER) {
    return handle(state, action, {
      success: () => {
        const { res, json } = action.payload;

        if (!res.ok)
          return state;

        return json.list.map((item: any) => ({
          date: moment(item.dt_txt),
          description: item.weather[0].description,
          humidity: item.main.humidity,
          pressure: item.main.pressure,
          temperature: item.main.temp,
        }));
      },
    });
  }

  return state;
};

export default weather;
