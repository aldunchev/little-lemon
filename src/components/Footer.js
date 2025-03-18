import { ReactComponent as Logo } from "../assets/icons/lemon.svg";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t-4 border-t-primary">
      <div className="container flex flex-col py-4">
        <Link to="/">
          <div className="flex items-center text-end gap-1">
            <span className="font-black leading-3">Little Lemon&trade;</span>
            <Logo className="w-12 h-12" />
          </div>
        </Link>
        <p className="text-xs">All Right Reserved</p>
      </div>
    </footer>
  );
}
