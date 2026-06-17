import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CastRow from "../components/ui/CastRow";
import MovieRow from "../components/ui/MovieRow";
const API_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits`, {
        method: "GET",
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_TOKEN}`
        }
      });

      const data = await res.json();
      setMovie(data);
      console.log(data.credits.cast)
    };

    getMovieDetails();
  }, [id])

  return (
    <div className="bg-background  text-white">
      <header className="bg-background">
        <button>back</button>
      </header>

      <main>
        <section className="relative overflow-hidden h-[80vh] mb-6">
          <div className="absolute inset-0 h-full">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie poster"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/10"></div>
          </div>

          <div className="relative pl-4 z-10 h-full flex items-end gap-4">
            <div className="w-30 rounded-2xl h-40 bg-gray-200">
              <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
            </div>

            <div className="flex flex-col ">
              <h2 className="font-bold text-3xl">{movie.title}</h2>
              <p>2022 . <span>2h 56m</span></p>
            </div>
          </div>
        </section>

        <section className="mb-4 pl-4">
          <span className="font-bold text-2xl">Overview</span>
          <p className="text-gray-300">{movie.overview}</p>
        </section>

        <CastRow cast={movie.credits?.cast} />

        <MovieRow title={"Similar"} />
      </main>
    </div>
  );
}

export default MovieDetailsPage;
