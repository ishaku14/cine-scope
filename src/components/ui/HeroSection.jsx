import { Link } from "react-router";
import PlayIcon from "../../assets/icons/icons8-play-30.png";
import InfoIcon from "../../assets/icons/icons8-info-50.png";
import StarRating from "../../assets/icons/star-rating.png";

function HeroSection({ movie, genres }) {
  if (!movie) return null;
  if (!genres) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0f] h-[min(92vh,680px)] mb-6">
      <img
        className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-60"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop}`}
        alt="Movie backdrop image"
      />

      {/* Left-to-right gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#05050c]/95 via-[#05050c]/70 to-transparent" />

      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-linear-to-t from-[#05050c]/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-5 pb-10 max-w-xl sm:px-10 sm:pb-14 lg:px-20 lg:pb-16">
        <div className="w-15 h-1 bg-accent rounded-sm mb-4" />

        <h1 className="text-[clamp(2rem,5.5vw,3.5rem)] font-bold text-white leading-tight tracking-tight mb-2">
          {movie.title}
        </h1>

        <div className="flex items-center gap-1.5 text-[0.72rem] uppercase tracking-widest text-white/50 mb-4">
          <span>{movie.releaseDate}</span>
          <span className="w-0.75 h-0.75 rounded-full bg-white/30" />
          {genres.map((genre, i) => (
            <div key={i}>
              <span>{genre}</span>
              <span className="w-0.75 h-0.75 rounded-full bg-white/30" />
            </div>)
          )}
          <span className="flex items-center gap-1 text-amber-400">
            <img
              className="w-2.75 h-2.75"
              src={StarRating}
              alt=""
              aria-hidden="true"
            />
            {(movie.rating).toFixed(1)}
          </span>
        </div>

        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/40 mb-1">Overview</p>

        <p className="text-[clamp(0.82rem,1.5vw,0.92rem)] text-white/70 leading-relaxed max-w-lg mb-7 line-clamp-4">
          {movie.overview}
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            className="flex items-center gap-1.5 bg-accent text-white text-[0.82rem] font-semibold tracking-wide px-5 py-2.5 rounded cursor-pointer hover:-translate-y-px transition-transform">
            <img className="w-4" src={PlayIcon} alt="" aria-hidden="true" />
            Play Trailer
          </button>

          <Link to={`/movie/${movie.id}`}>
            <button
              className="flex items-center gap-1.5 bg-white/-[0.08] border border-white/[0.14] text-white/90 text-[0.82rem] font-medium px-5 py-2.5 rounded cursor-pointer hover:bg-white/[0.14 hover:-translate-y-px transition-transform"
            >
              <img
                className="w-3.5 opacity-75"
                src={InfoIcon}
                alt=""
                aria-hidden="true"
              />
              View Details
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
