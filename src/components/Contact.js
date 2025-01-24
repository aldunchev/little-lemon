import { formatDate } from "../utils/dateFormatter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export function Contact({ contactState, dispatch }) {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    dispatch({ type: "UPDATE_NAME", payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "UPDATE_EMAIL", payload: e.target.value });
  };

  const handleOccasionChange = (e) => {
    dispatch({ type: "UPDATE_OCCASION", payload: e.target.value });
  };

  const handleRequirementsChange = (e) => {
    dispatch({ type: "UPDATE_REQUIREMENTS", payload: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!contactState.name.trim()) {
      newErrors.name = "Name is required";
    } else if (contactState.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactState.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(contactState.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (contactState.requirements.length > 1000) {
      newErrors.requirements =
        "Special requirements cannot exceed 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [searchParams] = useSearchParams();
  const bookingDate = searchParams.get("date");
  const bookingTime = searchParams.get("time");
  const bookingGuests = searchParams.get("guests");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const searchParams = new URLSearchParams({
        name: contactState.name,
        email: contactState.email,
        occasion: contactState.occasion,
        requirements: contactState.requirements,
        date: bookingDate,
        time: bookingTime,
        guests: bookingGuests,
      });
      dispatch({ type: "RESET_CONTACT" });
      navigate(`/confirmation?${searchParams.toString()}`);
    }
  };

  return (
    <section className="py-8">
      <div className="container max-w-screen-md">
        <h1 className="text-5xl mb-6">Contact Us</h1>

        <div className="mb-6 bg-gray-100 rounded">
          <h2 className="text-2xl mb-2">Your Booking Details:</h2>
          <p>Date: {bookingDate && formatDate(bookingDate)}</p>
          <p>Time: {bookingTime}</p>
          <p>Number of guests: {bookingGuests}</p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          <div className="py-2">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              required
              value={contactState.name}
              onChange={handleNameChange}
              placeholder="First Name Last Name"
            />
            {errors.name && (
              <span className="text-error text-sm">{errors.name}</span>
            )}
          </div>
          <div className="py-2">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              required
              value={contactState.email}
              onChange={handleEmailChange}
              placeholder="yourname@gmail.com"
            />
            {errors.email && (
              <span className="text-error text-sm">{errors.email}</span>
            )}
          </div>
          <div className="py-2">
            <label htmlFor="requirements">Occasion:</label>
            <select
              id="occasion"
              value={contactState.occasion}
              onChange={handleOccasionChange}
            >
              <option value="none">None(just want to have fun)</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="py-2">
            <label htmlFor="requirements">Special Requirements:</label>
            <textarea
              id="requirements"
              value={contactState.requirements}
              onChange={handleRequirementsChange}
              placeholder="I do not eat garlic, etc."
            ></textarea>
            {errors.requirements && (
              <span className="text-error text-sm">{errors.requirements}</span>
            )}
          </div>
          <button className="button button--primary" type="submit">
            Book now
          </button>
        </form>
      </div>
    </section>
  );
}
