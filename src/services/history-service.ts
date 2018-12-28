import { ICity } from '../interfaces';

const LS_KEY = 'cities';

/**
 * Fetch the history list from the local storage.
 *
 * @returns the cities list
 */
export const getHistory: () => ICity[] = () => {
  const json = localStorage.getItem(LS_KEY);

  if (!json)
    return [];

  return JSON.parse(json);
}

/**
 * Add a city to the history. If the city already exists,
 * it will then be set on the first place.
 *
 * @param city the city to add
 */
export const addToHistory: (city: ICity) => void = (city: ICity) => {
  const history = getHistory();
  const idx = history.findIndex(({ id }: ICity) => id === city.id);

  if (idx >= 0)
    history.splice(idx, 1);

  history.unshift(city);

  localStorage.setItem(LS_KEY, JSON.stringify(history));
}
