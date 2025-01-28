import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";

export function Hero() {
  return (
    <section className="bg-primary h-dvh py-6 md:py-12">
      <div className="container h-full">
        <div className="flex flex-col justify-center md:flex-row md:items-center h-full">
          {/* Text Content */}
          <div className="py-16 md:w-1/2 md:py-0">
            <h1 className="text-secondary text-5xl md:text-6xl font-bold mb-4">
              Little Lemon
            </h1>
            <h2 className="text-white text-3xl mb-6">Chicago</h2>
            <p className="text-white text-lg mb-8 max-w-md">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link
              to="/booking"
              className="inline-block bg-secondary text-black font-bold px-6 py-3 rounded-full hover:opacity-90 transition-colors"
            >
              Reserve a table
            </Link>
          </div>

          {/* Image - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block md:w-1/2">
            <img
              src={heroImage}
              alt="Little Lemon restaurant dish"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
