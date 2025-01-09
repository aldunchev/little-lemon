import { initializeTimes, updateTimes } from '../Main';

test('initializeTimes returns the correct times array', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test('updateTimes returns the same state', () => {
  const state = ['17:00', '18:00', '19:00'];
  const action = { type: 'UPDATE_TIMES', payload: new Date() }; // Example action
  const result = updateTimes(state, action);

  expect(result).toEqual(state);
});
