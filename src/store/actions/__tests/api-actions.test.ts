import apiRequest from '../apiRequest';
import { fetchWeatherFromCityName, fetchWeatherFromCityId } from '../api-actions';

jest.mock('../apiRequest');

afterEach(() => {
  apiRequest.mockClear();
});

test('should fetch weather information from a city name and county code', () => {
  fetchWeatherFromCityName('Le Havre', 'FR');

  const { calls } = apiRequest.mock;

  expect(calls).toHaveLength(1);
  expect(calls[0][0]).toBe('/data/2.5/forecast');
  expect(calls[0][1]).toMatchObject({ q: 'Le Havre,fr' });
});

test('should fetch weather information from a cityId', () => {
  fetchWeatherFromCityId(4269);

  const { calls } = apiRequest.mock;

  expect(calls).toHaveLength(1);
  expect(calls[0][0]).toBe('/data/2.5/forecast');
  expect(calls[0][1]).toMatchObject({ id: 4269 });
});
