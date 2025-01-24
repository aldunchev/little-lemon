import { ReactComponent as Success } from "../assets/icons/success.svg";
import { formatDate } from "../utils/dateFormatter";
import { useSearchParams } from "react-router-dom";

export function Confirmation() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const occasion = searchParams.get("occasion");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const guests = searchParams.get("guests");
  const requirements = searchParams.get("requirements");
  const email = searchParams.get("email");

  return (
    <section>
      <div className="container max-w-screen-md text-center flex flex-col justify-center h-dvh">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-4xl">
            Congratulations,{" "}
            <div className="text-2xl mt-2">{name ? name : ""}</div>
          </h1>
          <p>
            You have reserved a table for <strong>{guests}</strong> at
          </p>
          <p>
            <strong>
              {time} on {formatDate(date)}
            </strong>
          </p>
          {occasion !== "none" && (
            <p>
              Occasion: <strong>{occasion}</strong>
            </p>
          )}
          {requirements && (
            <p>
              Special requirements: <strong>{requirements}</strong>
            </p>
          )}
          <p>
            A confirmation email will be sent to <strong>{email}</strong>
          </p>
        </div>
        <div className="mx-auto mt-4">
          <Success />
        </div>
      </div>
    </section>
  );
}
