import { BookingForm } from '../BookingForm/BookingForm';
import './Bookingpage.css';

export function BookingPage({availableTimes, dispatch}) {

  return (
    <section className='py-8'>
      <div className='container max-w-screen-md'>
        <h1>Book now</h1>
        <h2>Available Times:</h2>
        <ul>
          {availableTimes ? availableTimes.map(time => <li key={time}>{time}</li>) : 'No available times'}
        </ul>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </section>
  );
}
