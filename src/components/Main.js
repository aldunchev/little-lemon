import { Routes, Route } from 'react-router-dom';
import { Homepage } from './Homepage';
import { BookingPage } from './Bookingpage/Bookingpage';
import { useReducer } from 'react';

const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export const initializeTimes = () => {
  return initialTimes;
};

export const updateTimes = (state, action) => {
  return state;
};

export function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initialTimes,
    initializeTimes
  );

  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route
          path='/booking'
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
      </Routes>
    </main>
  );
}
