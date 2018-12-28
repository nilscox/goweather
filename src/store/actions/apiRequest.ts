import * as queryString from 'query-string';

import {
  OWM_API_BASE_URL as API_BASE_URL,
  OWM_API_KEY as API_KEY,
} from '../../env.json';

export default async (route: string, qs: any) => {
  const res = await fetch([
    API_BASE_URL, route, '?',
    queryString.stringify({
      APPID: API_KEY,
      units: 'metric',
      ...qs,
    }),
  ].join(''));

  return {
    json: await res.json(),
    res,
  };
};
