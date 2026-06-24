import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/ui/HeroSection";
import SearchBar from "../components/ui/SearchBar";
import MovieRow from "../components/ui/MovieRow";
import normalizeMovie from "../utils/normalizeMovie";
import getGenreNames from "../utils/getGenreNames";
import Footer from "../components/layout/Footer";
import SearchResults from "../components/ui/searchResults";
import { options } from "../utils/fetchOptions";

function HomePage({ watchList, addToWatchList }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [featuredMovie, setfeaturedMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [query, setQuery] = useState("");
  
  const heroGenres = featuredMovie ? getGenreNames(featuredMovie.genreIds, genres) : [];

  useEffect(() => {
    const getGenres = async () => {
      const res = await fetch("https://api.themoviedb.org/3/genre/movie/list", options);

      const data = await res.json();
      setGenres(data.genres);
    };
    getGenres();
  }, []);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day", options);

      const data = await res.json();
      const normalizedData = data.results.map(normalizeMovie);
      setTrendingMovies(normalizedData);

      // const randomIndex = Math.floor(Math.random() * normalizedData.length);
      setfeaturedMovie(normalizedData[3]);
    };
    getTrendingMovies();
  }, []);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const res = await fetch("https://api.themoviedb.org/3/movie/top_rated", options);

      const data = await res.json();
      const normalizedData = data.results.map(normalizeMovie);
      setTopRatedMovies(normalizedData);
    };
    getTopRatedMovies();
  }, []);

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const res = await fetch("https://api.themoviedb.org/3/movie/upcoming", options);
      
      const data = await res.json();

      const normalizedData = data.results.map(normalizeMovie);

      setUpcomingMovies(normalizedData);
    };

    getUpcomingMovies();
  }, []);

  return (
    <>
      <title>Home</title>

      <Header watchList={watchList} />

      <main className="px-4 pt-16">
        <HeroSection movie={featuredMovie} genres={heroGenres} />
        <SearchBar query={query} setQuery={setQuery} />

        {query ? (
          <SearchResults query={query} watchList={watchList} addToWatchList={addToWatchList} />
        ) : (
          <>
            <MovieRow title={"Trending Now"} movies={trendingMovies} addToWatchList={addToWatchList} watchList={watchList} category={"trending"} />
            <MovieRow title={"Upcoming"} movies={upcomingMovies} addToWatchList={addToWatchList} watchList={watchList} category={"upcoming"} />
            <MovieRow  title={"Top Rated"} movies={topRatedMovies} addToWatchList={addToWatchList} watchList={watchList} category={"top_rated"} />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default HomePage;