import { BookingForm } from '../BookingForm/BookingForm';

export function BookingPage({availableTimes, dispatch}) {
  console.log(availableTimes);

  return (
    <section className='py-8'>
      <div className='container max-w-screen-md'>
        <h2>Book now</h2>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </section>
  );
}
