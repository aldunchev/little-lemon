import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <div className="container">
      <nav className="flex items-center gap-4 main-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            (isActive ? "active" : "") + " block p-2"
          }
        >
          Homepage
        </NavLink>
        <NavLink
          to="/booking"
          className={({ isActive }) =>
            (isActive ? "active" : "") + " block p-2"
          }
        >
          Booking
        </NavLink>
      </nav>
    </div>
  );
}
