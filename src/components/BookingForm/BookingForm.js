import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function BookingForm({ availableTimes, date, time, guests, dispatch }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleDateChange = (e) => {
    dispatch({ type: "UPDATE_DATE", payload: e.target.value });
    dispatch({ type: "UPDATE_AVAILABLE_TIMES", payload: e.target.value });
  };

  const handleTimeChange = (e) => {
    dispatch({ type: "UPDATE_TIME", payload: e.target.value });
  };

  const handleGuestsChange = (e) => {
    dispatch({ type: "UPDATE_GUESTS", payload: parseInt(e.target.value) });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate date
    if (!date) {
      newErrors.date = "Date is required";
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past";
      }
    }

    // Validate time
    if (!time) {
      newErrors.time = "Time is required";
    }

    // Validate guests
    if (!guests) {
      newErrors.guests = "Number of guests is required";
    } else if (guests < 1 || guests > 12) {
      newErrors.guests = "Number of guests must be between 1 and 12";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create URL search params with booking details
    const searchParams = new URLSearchParams({
      date: date,
      time: time,
      guests: guests,
    });

    // Reset form state
    dispatch({ type: "RESET_FORM" });

    // Navigate with search params
    navigate(`/contact?${searchParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="py-2">
        <label className="block" htmlFor="date">
          Choose date
        </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={handleDateChange}
          required
        />
        {errors.date && (
          <span className="text-error text-sm">{errors.date}</span>
        )}
      </div>
      <div className="py-2">
        <label className="block" htmlFor="time">
          Choose time
        </label>
        <select id="time" value={time} onChange={handleTimeChange} required>
          <option value="">Select a time</option>
          {availableTimes.map((timeSlot) => (
            <option key={timeSlot} value={timeSlot}>
              {timeSlot}
            </option>
          ))}
        </select>
        {errors.time && (
          <span className="text-error text-sm">{errors.time}</span>
        )}
      </div>
      <div className="py-2">
        <label className="block" htmlFor="guests">
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="12"
          id="guests"
          value={guests}
          required
          onChange={handleGuestsChange}
        />
        {errors.guests && (
          <span className="text-error text-sm">{errors.guests}</span>
        )}
      </div>
      <button className="button button--primary" type="submit">
        Contact info {<span className="text-sm">(step 1 of 2)</span>}
      </button>
    </form>
  );
}
