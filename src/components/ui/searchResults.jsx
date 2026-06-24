import { useState, useEffect } from "react"
import MovieCard from "../ui/MovieCard";
import normalizeMovie from "../../utils/normalizeMovie";
import { options } from "../../utils/fetchOptions";

function SearchResults({ query, watchList, addToWatchList }) {
  const [results, setResults] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery) return;

    const getQueryResults = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${debouncedQuery}`, options);

      const data = await res.json();
      const normalizedResults = data.results.map(normalizeMovie);
      setResults(normalizedResults);
    }

    getQueryResults();
  }, [debouncedQuery])

  return (
    <div className="sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="block w-1 h-5 bg-accent rounded-sm" />
        <h2 className="text-xl text-white font-bold tracking-tight">
          Results for: <span className="text-accent">"{query}"</span>
        </h2>
      </div>

      <div className="grid gap-4 w-full"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))' }}>
        {results.length === 0 && (
          <div className="text-gray-300">No results found </div>
        )}

        {results.map(movie => (
          <div key={movie.id}
            className="group/card transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-[1.03] will-change-transform">
            <MovieCard movie={movie} watchList={watchList} addToWatchList={addToWatchList} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResults;