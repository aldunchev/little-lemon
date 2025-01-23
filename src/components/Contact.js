import { useSearchParams } from "react-router-dom";
import { formatDate } from "../utils/dateFormatter";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  occasion: "none",
  requirements: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_OCCASION":
      return { ...state, occasion: action.payload };
    case "UPDATE_REQUIREMENTS":
      return { ...state, requirements: action.payload };
    default:
      return state;
  }
};

export function Contact() {
  const [searchParams] = useSearchParams();
  const [errors, setErrors] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const bookingDate = searchParams.get("date");
  const bookingTime = searchParams.get("time");
  const bookingGuests = searchParams.get("guests");

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

    if (!state.name.trim()) {
      newErrors.name = "Name is required";
    } else if (state.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!state.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(state.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (state.requirements.length > 1000) {
      newErrors.requirements =
        "Special requirements cannot exceed 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/confirmation");
    }
  };

  return (
    <>
      <section className="py-8">
        <div className="container max-w-screen-md">
          <h1 className="text-5xl mb-6">Contact Us</h1>

          {bookingDate && bookingTime && bookingGuests && (
            <div className="mb-6 p-4 bg-gray-100 rounded">
              <h2 className="text-2xl mb-2">Your Booking Details:</h2>
              <p>Date: {formatDate(bookingDate)}</p>
              <p>Time: {bookingTime}</p>
              <p>Number of guests: {bookingGuests}</p>
            </div>
          )}

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
                value={state.name}
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
                value={state.email}
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
                value={state.occasion}
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
                value={state.requirements}
                onChange={handleRequirementsChange}
                placeholder="I do not eat garlic, etc."
              ></textarea>
              {errors.requirements && (
                <span className="text-error text-sm">
                  {errors.requirements}
                </span>
              )}
            </div>
            <button className="button button--primary" type="submit">
              Book now
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
