// Generate a unique ID for each booking
const generateBookingId = () => {
  return `booking_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
};

// Save a new booking
export const saveBooking = (bookingData, contactData) => {
  const bookings = getBookings();
  const newBooking = {
    id: generateBookingId(),
    booking: bookingData,
    contact: contactData,
    createdAt: new Date().toISOString(),
  };

  bookings.push(newBooking);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  return newBooking.id;
};

// Get all bookings
export const getBookings = () => {
  const bookings = localStorage.getItem("bookings");
  return bookings ? JSON.parse(bookings) : [];
};

// Get a specific booking by ID
export const getBookingById = (id) => {
  const bookings = getBookings();
  return bookings.find((booking) => booking.id === id);
};

// Delete a booking
export const deleteBooking = (id) => {
  const bookings = getBookings();
  const updatedBookings = bookings.filter((booking) => booking.id !== id);
  localStorage.setItem("bookings", JSON.stringify(updatedBookings));
};
