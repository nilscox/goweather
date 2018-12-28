import { ICity } from '../interfaces';

const LS_KEY = 'cities';

export const getHistory = () => {
  const json = localStorage.getItem(LS_KEY);

  if (!json)
    return [];

  return JSON.parse(json);
}

export const addToHistory = (city: ICity) => {
  const history = getHistory();
  const idx = history.findIndex(({ id }: ICity) => id === city.id);

  if (idx > 0)
    history.splice(idx, 1);

  history.unshift(city);

  localStorage.setItem(LS_KEY, JSON.stringify(history));
}
