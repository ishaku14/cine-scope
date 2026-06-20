import { Link } from "react-router";
import { MdCheckCircle } from "react-icons/md"

function WatchListCard({ movie }) {
  if(!movie) return null;

  return (
    <div
      className="group/card flex flex-col gap-2 transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-[1.03] will-change-transform">

      {/* Poster */}
      <div className="relative w-full overflow-hidden rounded-xl  border border-white/[0.07] bg-white/5 aspect-2/3">
        <Link to={`/movie/${movie.id}`}>
          <img
            className="w-full h-full object-cover object-center"
            src={`https://image.tmdb.org/t/p/w342${movie.posterPath}`}
            alt={movie.title}
          />
        </Link>

        {/* Watched overlay */}
        {movie.watched && (
          <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
            <MdCheckCircle size={36} className="text-accent opacity-90" />
          </div>
        )}

        <div
          className="absolute bottom-0 inset-x-0 flex items-center justify-between px-2 py-1.5 bg-black/70 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
          <button
            className="text-[0.62rem] font-semibold uppercase tracking-widest text-white/70 hover:text-accent transition-colors duration-150 cursor-pointer">
            {movie.watched ? "Unmark" : "Watched"}
          </button>
          <button
            className="text-[0.62rem] font-semibold uppercase tracking-widest text-white/40 hover:text-red-400 transition-colors duration-150 cursor-pointer">
            Remove
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-0.5 px-0.5">
        <span
          className={`font-semibold text-[0.82rem] leading-snug line-clamp-1 transition-colors duration-150 group-hover/card:text-accent ${movie.watched ? "text-white/40" : "text-white"}`}>
          {movie.title}
        </span>
        <span className="text-[0.68rem] text-white/40 tracking-wide">
          {movie.releaseDate}
        </span>
      </div>
    </div>
  );
}

export default WatchListCard;