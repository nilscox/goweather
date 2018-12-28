import { ICity } from '../../interfaces';

const LS_KEY = 'cities';

export const LOAD_HISTORY = 'LOAD_HISTORY';

export const loadHistory = () => {
  const json = localStorage.getItem(LS_KEY);

  if (!json) {
    return {
      history: [],
      type: LOAD_HISTORY,
    };
  }

  return {
    history: JSON.parse(json),
    type: LOAD_HISTORY,
  };
};

export const addHistory = (city: ICity) => {
  const json = localStorage.getItem(LS_KEY);
  const history = json ? JSON.parse(json) : [];

  const idx = history.findIndex(({ id }: ICity) => id === city.id);

  if (idx >= 0)
    history.splice(idx, 1);

  history.unshift(city);

  localStorage.setItem(LS_KEY, JSON.stringify(history));

  return {
    history,
    type: LOAD_HISTORY,
  };
};

export const clearHistory = () => {
  localStorage.clear();

  return {
    history: [],
    type: LOAD_HISTORY,
  };
};
