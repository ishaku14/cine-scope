import { Link } from "react-router";
import { getItem } from "../../utils/localStorage";

function Header() {
  const watchListCount = getItem('watchList')?.length || 0

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 h-16 z-100 bg-background">
      <div className="flex items-center gap-1.5">
        <span className="text-accent font-bold text-[1.4rem] tracking-tight">
          CineScope
        </span>

        <ul className="flex gap-4 ml-4 text-gray-400 text-[0.8rem] tracking-widest uppercase">
          <li><Link className="hover:text-accent" to="/">Home</Link></li>
          <li><Link className="hover:text-accent"  to="watchlist">WATCHLIST</Link></li>
          <li className="-ml-3 text-accent">({watchListCount})</li>
        </ul>
      </div>
 
      
      <div className="flex items-center gap-3">
        <button className="relative text-gray-400 hover:text-white transition-colors">
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-violet-500 rounded-full" />
        </button>
 
        <button className="w-8 h-8 rounded-full bg-violet-700 overflow-hidden">
          <img
            src="https://i.pravatar.cc/32"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;