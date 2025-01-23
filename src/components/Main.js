import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { BookingPage } from "./Bookingpage/Bookingpage";
import { Contact } from "./Contact";
import { useReducer } from "react";
import { Confirmation } from "./Confirmation";
import {
  bookingReducer,
  initialState as bookingInitialState,
} from "../reducers/bookingReducer";
import {
  contactReducer,
  initialState as contactInitialState,
} from "../reducers/contactReducer";

export function Main() {
  const [bookingState, bookingDispatch] = useReducer(
    bookingReducer,
    bookingInitialState,
  );
  const [contactState, contactDispatch] = useReducer(
    contactReducer,
    contactInitialState,
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={bookingState.availableTimes}
              date={bookingState.date}
              time={bookingState.time}
              guests={bookingState.guests}
              dispatch={bookingDispatch}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              bookingState={bookingState}
              contactState={contactState}
              dispatch={contactDispatch}
            />
          }
        />
        <Route
          path="/confirmation"
          element={
            <Confirmation
              bookingState={bookingState}
              contactState={contactState}
            />
          }
        />
      </Routes>
    </main>
  );
}
