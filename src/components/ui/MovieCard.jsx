import { Link } from "react-router";

function MovieCard({ movie }) {
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <div className="flex flex-col gap-1">
          <div className="bg-white w-35 h-45 overflow-hidden rounded-2xl border border-accent cursor-pointer">
            <img
              className="w-full h-full overflow-hidden"
              src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
              alt=""
            />
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-[1.05rem]">{movie.title}</span>
            <span className="text-gray-300">{movie.releaseDate}</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
