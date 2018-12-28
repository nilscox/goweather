import { loadHistory, addHistory } from '../history-actions';

const MOCK_CITY = {id: 3038354, name: 'Aix-en-Provence', country: 'FR'};
const MOCK_CITY2 = {id: 3003796, name: "Le Havre", country: "FR"};

afterEach(() => {
  localStorage.clear();
});

test('should return an empty array the first time calling loadHistory', () => {
  const result = loadHistory();

  expect(result).toHaveProperty('history', []);
  expect(localStorage.getItem).toHaveBeenCalledWith('cities');
});

test('should return a populated history', () => {
  localStorage.setItem('cities', JSON.stringify([MOCK_CITY]));

  const result = loadHistory();

  expect(result).toHaveProperty('history', [MOCK_CITY]);
});

test('should add a new entry to the history', () => {
  const result = addHistory(MOCK_CITY);

  expect(result).toHaveProperty('history', [MOCK_CITY]);
  expect(localStorage.setItem).toHaveBeenCalledWith('cities', JSON.stringify([MOCK_CITY]));
});

test('should add an existing entry to the history', () => {
  localStorage.setItem('cities', JSON.stringify([MOCK_CITY, MOCK_CITY2]));

  const result = addHistory(MOCK_CITY2);

  expect(result).toHaveProperty('history', [MOCK_CITY2, MOCK_CITY]);
  expect(localStorage.setItem).toHaveBeenCalledWith('cities', JSON.stringify([MOCK_CITY2, MOCK_CITY]));
});
