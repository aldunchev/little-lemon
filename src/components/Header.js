import { Nav } from "./Nav";
import { ReactComponent as Logo } from "../assets/icons/lemon.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header role="banner" className="py-4 md:p-8 border-b border-yellow-400">
      <div className="container flex items-center gap-4 md:gap-12">
        <Link to="/">
          <div className="flex items-center gap-1">
            <span className="font-black leading-3">
              Little Lemon<i>&trade;</i>
            </span>
            <Logo className="w-12 h-12" />
          </div>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
