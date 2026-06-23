import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { CgSpinner } from "react-icons/cg";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MovieCard from "../components/ui/MovieCard";
import NormalizeMovie from "../utils/normalizeMovie";

const API_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

const ENDPOINTS = {
  // trending: "/trending/movie/day",
  trending: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

const TITLES = {
  trending: "Trending Now",
  top_rated: "Top Rated",
  upcoming: "/movie/upcoming",
};

function MoviesPage({ watchList, addToWatchList }) {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const endpoint = ENDPOINTS[category];
      if(!endpoint) return;

      setLoading(true);

      try {
        const res = await fetch(
        `${BASE_URL}${endpoint}?page=${page}`,
        options,);

        const data = await res.json();

        const normalizedData = data.results?.map(NormalizeMovie);

        setMovies((prev) =>
          page === 1 ? normalizedData : [...prev, ...normalizedData],
        );
        setHasMore(page < data.total_pages);

        console.log(`Page: ${page}`, normalizedData.map(m => m.id));

      } catch(error) {
        console.error("Failed to fetch movies: ", error);
      } finally {
        setLoading(false);
      }

    };

    fetchMovies();
  }, [page, category]);

  useEffect(() => {
    if(movies.length === 0) return;

    const target = observerRef.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if(entry.isIntersecting && !loading && hasMore) {
        setPage(prev => prev + 1)
      }

    }, {
      root: null,
      rootMargin: "400px",
      threshold: 0
    });

    observer.observe(target);
    
    return () => observer.disconnect();
  }, [loading, hasMore, movies.length]);

  return (
    <>
      <Header watchList={watchList} />

      <main className="px-8 mt-16 bg-background text-white">
        <section aria-labelledby="unwatched-heading">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-1 h-5 bg-accent rounded-sm"
              aria-hidden="true"/>
            <h2 className="text-xl font-bold tracking-tight">{TITLES[category]}</h2>
          </div>

          <div className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(135px, 1fr))",
            }}>
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} watchList={watchList} addToWatchList={addToWatchList} />
            ))}
          </div>
        </section>

        <div className="cursor-pointer mt-4 text-accent px-4 text-center m-auto w-32" ref={observerRef}>
          {loading && (
            <div className="flex justify-center py-6">
              <CgSpinner size={28} className="text-accent animate-spin" />
            </div>
          )}

          {!hasMore && movies.length > 0 && (
            <p className="text-center text-[0.8rem] uppercase tracking-widest text-white/20 py-6">
              You've seen it all
            </p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MoviesPage;