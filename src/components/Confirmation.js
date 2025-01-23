import { ReactComponent as Success } from "../assets/icons/success.svg";
import { formatDate } from "../utils/dateFormatter";

export function Confirmation({ contactData }) {
  const { guests, time, date } = contactData;

  return (
    <section>
      <div className="container max-w-screen-md text-center flex flex-col justify-center h-dvh">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-5xl">Congratulations</h1>
          <p>
            You have reserved a table for <strong>{guests}</strong> at
          </p>
          <p>
            <strong>
              {time} on {formatDate(date)}
            </strong>
          </p>
          <p>You will receive a confirmation email</p>
        </div>
        <div className="mx-auto mt-4">
          <Success />
        </div>
      </div>
    </section>
  );
}
