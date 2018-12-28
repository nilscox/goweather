import { ICity, IWeather } from '../interfaces';

export type State = {
  cityName: string,
  history: ICity[],
  weather: IWeather[] | null,
};
