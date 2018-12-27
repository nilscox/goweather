import * as queryString from 'query-string';

const API_BASE_URL = 'https://api.openweathermap.org';
const API_KEY = '';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const fetchWeather = (cityName: string, countryCode: string) => ({
  promise: fetch([
    API_BASE_URL,
    '/data/2.5/forecast',
    '?' + queryString.stringify({
      APPID: API_KEY,
      q: [cityName, countryCode].join(','),
    }),
  ].join('/')),
  type: FETCH_WEATHER,
});
