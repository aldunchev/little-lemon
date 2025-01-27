import { formatDate } from "../utils/dateFormatter";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveBooking } from "../utils/storage";

export function Contact() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [tempBooking, setTempBooking] = useState(null);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    occasion: "none",
    requirements: "",
  });

  useEffect(() => {
    const savedTempBooking = localStorage.getItem("tempBooking");
    if (savedTempBooking) {
      setTempBooking(JSON.parse(savedTempBooking));
    } else {
      // If no booking data, redirect to booking page
      navigate("/booking");
    }
  }, [navigate]);

  const handleNameChange = (e) => {
    setContactData({ ...contactData, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setContactData({ ...contactData, email: e.target.value });
  };

  const handleOccasionChange = (e) => {
    setContactData({ ...contactData, occasion: e.target.value });
  };

  const handleRequirementsChange = (e) => {
    setContactData({ ...contactData, requirements: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!contactData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (contactData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(contactData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (contactData.requirements.length > 1000) {
      newErrors.requirements =
        "Special requirements cannot exceed 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Combine booking and contact data
      const finalBooking = {
        ...tempBooking,
        contact: contactData,
      };

      // Save final booking and get ID
      const bookingId = saveBooking(tempBooking.booking, contactData);

      // Clear temporary booking
      localStorage.removeItem("tempBooking");

      // Navigate to confirmation
      navigate(`/confirmation/${bookingId}`);
    }
  };

  if (!tempBooking) return null;

  return (
    <section className="py-8">
      <div className="container max-w-screen-md">
        <h1 className="text-5xl mb-6">Contact Us</h1>

        <div className="mb-6 p-4 bg-gray-100 rounded">
          <h2 className="text-2xl mb-2">Your Booking Details:</h2>
          <p>Date: {formatDate(tempBooking.booking.date)}</p>
          <p>Time: {tempBooking.booking.time}</p>
          <p>Number of guests: {tempBooking.booking.guests}</p>
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
              value={contactData.name}
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
              value={contactData.email}
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
              value={contactData.occasion}
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
              value={contactData.requirements}
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
