import { Link } from "react-router";
import MovieCard from "./MovieCard";

function MovieRow({ title, movies = [], watchList, addToWatchList, category }) {
  return (
    <section className="mb-12 group/section">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="block w-1 h-5 bg-accent rounded-sm" />
          <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {title}
          </span>
        </div>

        <Link to={`/movies/${category}`}>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest text-white/40 cursor-pointer hover:text-accent transition-colors duration-200">
            See all
          </span>
        </Link>
      </div>

      {/* Scrollable row */}
      <div className="flex gap-4 sm:gap-4  sm:px-6 lg:px-8 pb-4 overflow-x-auto scrollbar-none mask-[linear-gradient(to_right,transparent_0,black_0.3rem,black_calc(100%-2rem),transparent_100%)]">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-none w-32.5 sm:w-37.5 md:w-40 transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-[1.0] cursor-pointer will-change-transform">
            <MovieCard movie={movie} watchList={watchList} addToWatchList={addToWatchList} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieRow;
