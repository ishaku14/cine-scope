import { NavLink } from "react-router";

function Header({ watchList }) {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 h-16 z-100 bg-background">
      <div className="flex items-center gap-1.5">
        <span className="text-accent font-bold text-[1.4rem] tracking-tight">
          Moviedge
        </span>
      </div>

      <ul className="flex gap-4 ml-4 text-gray-400 text-[0.8rem] tracking-widest uppercase items-center">
        <li><NavLink className={({ isActive }) => isActive ? "text-accent" : "text-gray-400"} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-accent" : "text-gray-400"}  to="/watchlist">WATCHLIST</NavLink></li>
        <li className={`-ml-4 text-accent ${watchList.length === 0 ? "opacity-0" : "opacity-100"}`}>
          ({watchList.length})
          </li>
      </ul>
    </header>
  );
}

export default Header;