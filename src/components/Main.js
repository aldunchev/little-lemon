import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { BookingPage } from "./Bookingpage/Bookingpage";
import { Contact } from "./Contact";
import { useReducer } from "react";
import { Confirmation } from "./Confirmation";
import { bookingReducer, initialState } from "../reducers/bookingReducer";

export function Main() {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
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
        <Route path="/contact" element={<Contact contactData={state} />} />
        <Route
          path="/confirmation"
          element={<Confirmation contactData={state} />}
        />
      </Routes>
    </main>
  );
}
