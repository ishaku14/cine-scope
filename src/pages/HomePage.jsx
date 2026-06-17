import { useState } from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/ui/HeroSection";
import SearchBar from "../components/ui/SearchBar";
import MovieRow from "../components/ui/MovieRow";
import TonightsPick from "../components/ui/TonightsPick";
import { useEffect } from "react";
import normalizeMovie from "../utils/normalizeMovie";
const API_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
 
  useEffect(() => {
    const getTrendingMovies = async () => {
      const res = await fetch("https://api.themoviedb.org/3/trending/all/day", {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_TOKEN}`
        }
      });

      const data = await res.json();
      const normalizedData = data.results.map(normalizeMovie);
      setTrendingMovies(normalizedData);
  
    };

    getTrendingMovies();
  }, []);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const res = await fetch("https://api.themoviedb.org/3/tv/top_rated", {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_TOKEN}`
        }
      });

      const data = await res.json();
      const normalizedData = data.results.map(normalizeMovie);
      setTopRatedMovies(normalizedData);
  
    };

    getTopRatedMovies();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-background">
        <HeroSection />
        <SearchBar />
        <MovieRow title={"Trending Today"} movies={trendingMovies}  />
        <TonightsPick />
        <MovieRow title={"Top Rated"} movies={topRatedMovies} />
      </main>
    </>
  );
}

export default HomePage;