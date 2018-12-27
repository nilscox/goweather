import * as queryString from 'query-string';

const API_BASE_URL = 'https://api.openweathermap.org';
const API_KEY = '';

const apiRequest = async (route: string, qs: any) => {
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

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeatherFromCityName = (cityName: string, countryCode: string) => ({
  promise: apiRequest('/data/2.5/forecast', { q: [cityName, countryCode].join(',') }),
  type: FETCH_WEATHER,
});

export const fetchWeatherFromCityId = (cityId: number) => ({
  promise: apiRequest('/data/2.5/forecast', { id: cityId }),
  type: FETCH_WEATHER,
});
