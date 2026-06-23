import { useState } from "react";
import { GoBookmark } from "react-icons/go";
import { GoBookmarkFill } from "react-icons/go";
import { Link } from "react-router";

function MovieCard({ movie, watchList ,addToWatchList }) {
  const [isClicked, setIsClicked] = useState(() => watchList?.some(m => m.id === movie.id));

  const handleBookmark = (e) => {
    e.stopPropagation();

    setIsClicked(prev => !prev);

    addToWatchList(movie);
  };

  return (
    <div className="relative">
      <Link to={`/movie/${movie.id}`} className="block group/card ">
      <div className="flex flex-col gap-2">
        <div className="relative w-full overflow-hidden rounded-xl bg-white/5 border border-white/[0.07] aspect-2/3">
          <img 
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover/card:scale-105"
            src={`https://image.tmdb.org/t/p/w342${movie.posterPath}`}
            alt={movie.title}
          />

          {/* Subtle bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-1/4 pointer-events-none bg-linear-to-t from-[rgba(5,5,12,0.55)] via-0% to-transparent" />
        </div>

        <div className="flex flex-col gap-0.5 px-0.5">
          <span className="font-semibold text-[0.82rem] text-white leading-snug line-clamp-1 group-hover/card:text-accent transition-colors duration-150">
            {movie.title}
          </span>

          <span className="text-[0.68rem] text-white/40 tracking-wide">
            {movie.releaseDate}
          </span>
        </div>
      </div>
      </Link>

      <button className={`${isClicked ? "text-accent" : "text-white"} text-[1.5rem] absolute bottom-13 right-1`} onClick={handleBookmark}>
        {isClicked ? (<GoBookmarkFill />) : (<GoBookmark />)}
      </button>
    </div>
  );
}

export default MovieCard;