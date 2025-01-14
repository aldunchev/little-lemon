import { Routes, Route } from 'react-router-dom';
import { Homepage } from './Homepage';
import { BookingPage } from './Bookingpage/Bookingpage';
import { Contact } from './Contact';
import { useReducer } from 'react';
import { fetchAPI } from './api/fetchAPI';

const initialState = {
  date: '',
  time: '',
  guests: 0,
  availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return { ...state, date: action.payload };
    case 'UPDATE_TIME':
      return { ...state, time: action.payload };
    case 'UPDATE_GUESTS':
      return { ...state, guests: isNaN(action.payload) ? 0 : action.payload };
    case 'UPDATE_AVAILABLE_TIMES':
      if (action.payload) {
        return { ...state, availableTimes: fetchAPI(new Date(action.payload)) };
      }
      return state;
    default:
      return state;
  }
};

export function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route
          path='/booking'
          element={
            <BookingPage
              availableTimes={state.availableTimes}
              date={state.date}
              time={state.time}
              guests={state.guests}
              dispatch={dispatch}
            />
          }
        />
        <Route
          path='/contact'
          element={
            <Contact contactData={state} />
          }
        />
      </Routes>
    </main>
  );
}
