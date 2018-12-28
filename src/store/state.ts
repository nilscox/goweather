import { IWeather } from '../interfaces';

export type State = {
  cityName: string,
  weather: IWeather[] | null,
};
