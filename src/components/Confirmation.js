import { ReactComponent as Success } from "../assets/icons/success.svg";
import { formatDate } from "../utils/dateFormatter";
import { useParams, useNavigate } from "react-router-dom";
import { getBookingById } from "../utils/storage";
import { useEffect, useState } from "react";

export function Confirmation({ dispatch }) {
  const { bookingId } = useParams();
  const [bookingData, setBookingData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const booking = getBookingById(bookingId);
    if (booking) {
      setBookingData(booking);
    }

    // Cleanup function to reset form when leaving confirmation page
    return () => {
      dispatch({ type: "RESET_BOOKING" });
    };
  }, [bookingId, dispatch]);

  if (!bookingData) {
    return <div>Loading...</div>;
  }

  const { booking, contact } = bookingData;

  return (
    <section>
      <div className="container max-w-screen-md text-center flex flex-col justify-start mt-8 h-dvh">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="font-bold text-2xl md:text-5xl">
            Congratulations {contact.name}!
          </h1>
          <p>
            You have reserved a table for <strong>{booking.guests}</strong> at
          </p>
          <p>
            <strong>
              {booking.time} on {formatDate(booking.date)}
            </strong>
          </p>
          {contact.occasion !== "none" && (
            <p>
              Occasion: <strong>{contact.occasion}</strong>
            </p>
          )}
          {contact.requirements && (
            <p>
              Special requirements: <strong>{contact.requirements}</strong>
            </p>
          )}
          <p>
            A confirmation email will be sent to{" "}
            <strong>{contact.email}</strong>
          </p>
        </div>
        <div className="mx-auto mt-4">
          <Success />
        </div>
      </div>
    </section>
  );
}
