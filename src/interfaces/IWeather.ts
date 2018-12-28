import { Moment } from 'moment';

export interface IWeather {
  date: Moment,
  description: string,
  humidity: number,
  pressure: number,
  temperature: number,
}
