import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <div className="container border-l-4 border-l-secondary !pl-4 !md:pl-12">
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
