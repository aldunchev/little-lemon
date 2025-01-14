import { useNavigate } from 'react-router-dom';

export function BookingForm({availableTimes, date, guests, dispatch}) {
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    dispatch({type: 'UPDATE_DATE', payload: e.target.value});
    dispatch({type: 'UPDATE_TIMES', payload: e.target.value});
  };

  const handleTimeChange = (e) => {
    // setAvailableTimes([e.target.value]);
    console.log(e.target.value);
  };

  const handleGuestsChange = (e) => {
    dispatch({type: 'UPDATE_GUESTS', payload: parseInt(e.target.value)});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='py-2'>
        <label className='block' htmlFor='date'>
          Choose date
        </label>
        <input id='date' type='date' value={date} onChange={handleDateChange} />
      </div>
      <div className='py-2'>
        <label className='block' htmlFor='time'>
          Choose time
        </label>
        <select id='time' value={availableTimes ? availableTimes[0] : ''} onChange={handleTimeChange}>
          {availableTimes && availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
      </div>
      <div className='py-2'>
        <label className='block' htmlFor='guests'>
          Number of guests
        </label>
        <input
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
          value={guests}
          onChange={handleGuestsChange}
        />
      </div>
      <button className='button button--primary' type='submit'>Book now</button>
    </form>
  );
}
