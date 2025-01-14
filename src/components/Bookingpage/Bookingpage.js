import { BookingForm } from '../BookingForm/BookingForm';
import './Bookingpage.css';

export function BookingPage({ availableTimes, date, time, guests, dispatch }) {

  return (
    <section className='py-8'>
      <div className='container max-w-screen-md'>
        <h1>Book now</h1>
        <h2>Available Times:</h2>
        <ul>
          {availableTimes.length > 0 ? availableTimes.map(timeSlot => (
            <li key={timeSlot} className={timeSlot === time ? 'selected' : ''}>
              {timeSlot}
            </li>
          )) : 'No available times'}
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
