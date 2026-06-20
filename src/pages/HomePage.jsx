import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/ui/HeroSection";
import MovieRow from "../components/ui/MovieRow";
import TonightsPick from "../components/ui/TonightsPick";
import normalizeMovie from "../utils/normalizeMovie";
import getGenreNames from "../utils/getGenreNames";
import FooterNav from "../components/layout/FooterNav";
const API_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [featuredMovie, setfeaturedMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  const heroGenres = featuredMovie ? getGenreNames(featuredMovie.genreIds, genres) : [];

  useEffect(() => {
    const getGenres = async () => {
      const res = await fetch("https://api.themoviedb.org/3/genre/movie/list", {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });

      const data = await res.json();
      setGenres(data.genres);
    };
    getGenres();
  }, []);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
        },
      );

      const data = await res.json();
      const normalizedData = data.results.map(normalizeMovie);
      setTrendingMovies(normalizedData);

      const randomIndex = Math.floor(Math.random() * normalizedData.length);
      setfeaturedMovie(normalizedData[randomIndex]);
    };
    getTrendingMovies();
  }, []);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const res = await fetch("https://api.themoviedb.org/3/tv/top_rated", {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });

      const data = await res.json();
      const normalizedData = data.results.map(normalizeMovie);
      setTopRatedMovies(normalizedData);
    };
    getTopRatedMovies();
  }, []);

  return (
    <>
      <title>Home</title>

      <Header />

      <main className="px-4 py-16">
        <HeroSection movie={featuredMovie} genres={heroGenres} />
        <MovieRow title={"Trending Today"} movies={trendingMovies} />
        <TonightsPick />
        <MovieRow title={"Top Rated"} movies={topRatedMovies} />
      </main>

      <FooterNav />
    </>
  );
}

export default HomePage;