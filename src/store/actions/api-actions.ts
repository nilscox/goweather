import apiRequest from './apiRequest';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeatherFromCityName = (cityName: string, countryCode: string) => ({
  promise: apiRequest('/data/2.5/forecast', { q: [cityName, countryCode.toLowerCase()].join(',') }),
  type: FETCH_WEATHER,
});

export const fetchWeatherFromCityId = (cityId: number) => ({
  promise: apiRequest('/data/2.5/forecast', { id: cityId }),
  type: FETCH_WEATHER,
});
