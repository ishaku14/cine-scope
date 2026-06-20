import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CastRow from "../components/ui/CastRow";
import { IoMdArrowBack } from "react-icons/io";
const API_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
        },
      );

      const data = await res.json();
      setMovie(data);
    };

    getMovieDetails();
  }, [id]);

  return (
    <div className="min-h-screen bg-background text-white">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
        <button
          className="flex items-center gap-2 text-[0.78rem] font-medium uppercasetracking-widest text-white/40 hover:text-white transition-colors duration-200 cursor-pointer">
          <IoMdArrowBack />
          Back
        </button>
      </header>

      <main>
        <section className="relative overflow-hidden h-[85vh] mb-10" aria-label="Movie hero">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover object-[center_20%] opacity-55"
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt=""
              aria-hidden="true"
            />
            {/* Bottom-heavy gradient so content reads over image */}
            <div className="absolute inset-0 bg-linear-to-t from-[rgba(5,5,12,1)] via-[rgba(5,5,12,0.75)]/70 to-[rgba(5,5,12,0.2)]/90"/>

            {/* Left-side gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-[rgba(5,5,12,0.6)]/90  via-transparent to-transparent"/>
          </div>

          <div className="relative z-10 h-full flex items-end px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
            <div className="flex items-end gap-5 sm:gap-6">
              <div className="flex-none w-25 sm:w-30 md:w-35 rounded-xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] aspect-2/3">
                <img
                  className="w-full h-full object-cover"
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
              </div>

              <div className="flex flex-col gap-2 pb-1">
                <span className="block w-7 h-0.5 bg-accent rounded-sm" />
                <h1 className="font-bold text-[clamp(1.6rem,4.5vw,3rem)] leading-tight tracking-tight text-white">{movie.title}</h1>
                <p className="text-[0.78rem] text-white/45 tracking-wide">
                  2022 &middot; <span>2h 56m</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8 space-y-10 pb-16">
          <section aria-labelledby="overview-heading">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-1 h-5 bg-accent rounded-sm" aria-hidden="true" />
              <h2 className="text-xl font-bold tracking-tight">Overview</h2>
            </div>
            <p className="text-white/60 text-[0.9rem] leading-relaxed max-w-2xl">
              {movie.overview}
            </p>
          </section>

          <section aria-label="Cast">
            <CastRow cast={movie.credits?.cast} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default MovieDetailsPage;