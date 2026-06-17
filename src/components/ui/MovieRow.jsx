import MovieCard from "./MovieCard";

function MovieRow({ title, movies = [] }) {
  return (
    <section className="mb-10">
      <div className="flex justify-between text-white mb-4 px-4">
        <span className="text-2xl font-bold">{title}</span>
        <span className="text-purple-200">See All</span>
      </div>

      <div className="flex gap-4 pl-4 text-white overflow-auto">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))};
      </div>
    </section>
  );
}

export default MovieRow;