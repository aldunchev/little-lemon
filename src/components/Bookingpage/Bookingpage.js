import { BookingForm } from "../BookingForm/BookingForm";
import { Pill } from "../Pill";
import "./Bookingpage.css";

export function BookingPage({ availableTimes, date, time, guests, dispatch }) {
  return (
    <section className="py-8">
      <div className="container max-w-screen-md">
        <h1 className="text-5xl mb-6">Book now</h1>
        <h2 className="text-3xl mb-2">Available Times:</h2>
        <ul className="flex flex-wrap gap-2 mb-8">
          {availableTimes.length > 0
            ? availableTimes.map((timeSlot) => (
                <li
                  key={timeSlot}
                  className={timeSlot === time ? "selected" : ""}
                >
                  <Pill text={timeSlot} />
                </li>
              ))
            : "No available times"}
        </ul>
        <BookingForm
          availableTimes={availableTimes}
          date={date}
          time={time}
          guests={guests}
          dispatch={dispatch}
        />
      </div>
    </section>
  );
}
