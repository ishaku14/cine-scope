import { NavLink } from 'react-router'

function Footer() {
  return (
    <footer className="border-t border-white/6 bg-background px-4 sm:px-6 lg:px-8 py-10 mt-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Wordmark + tagline */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-accent font-bold text-[1.2rem] tracking-tight">
            MOVIEDGE
          </span>
          <p className="text-[0.68rem] uppercase tracking-widest text-white/25">
            Discover. Save. Watch.
          </p>
        </div>

        <nav className="flex items-center gap-6">
          <NavLink to="/" className="text-[0.72rem] uppercase tracking-widest text-white/30 hover:text-white transition-colors duration-200">
            Home
          </NavLink>
          <NavLink to="/watchlist" className="text-[0.72rem] uppercase tracking-widest text-white/30 hover:text-white transition-colors duration-200">
            Watchlist
          </NavLink>
        </nav>

        <p className="text-[0.68rem] uppercase tracking-widest text-white/20">
          Powered by TMDB
        </p>
      </div>
    </footer>
  );
}

export default Footer