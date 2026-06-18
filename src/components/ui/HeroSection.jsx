import { Link } from "react-router";
import PlayIcon from "../../assets/icons/icons8-play-30.png";
import InfoIcon from "../../assets/icons/icons8-info-50.png";

function HeroSection({ movie, genres }) {
  if (!movie) return null;
  if (!genres) return null;

  return (
    <section className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 h-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop}`}
          alt="movie poster"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/10"></div>
      </div>

      <div className="relative z-10 h-full flex items-end px-6 pb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-500 font-bold px-2 py-1 rounded-lg">
              IMDb
            </span>

            <span className="font-bold text-white">8.8</span>

            {genres.map((genre, index) => {
              return (
                <span className="text-gray-300" key={index}>
                  {genre}
                </span>
              );
            })}
          </div>

          <h1 className="text-4xl font-bold text-white">{movie.title}</h1>

          <p className="mb-6 text-gray-300">{movie.overview}</p>

          <div className="flex gap-4 text-white whitespace-nowrap justify-center">
            <button className="rounded-xl bg-accent px-6 py-4 border-none font-medium flex items-center gap-4 cursor-pointer">
              <img className="w-5" src={PlayIcon} alt="" />
              Watch Trailers
            </button>

            <Link to={`/movie/${movie.id}`}>
              <button className="bg-background/80 rounded-xl px-6 py-4 font-bold flex gap-2 items-center border border-white/20 whitespace-nowrap cursor-pointer">
                <img className="w-5" src={InfoIcon} alt="" />
                view Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;