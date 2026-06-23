import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { getItem, setItem } from "./utils/localStorage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import WatchListPage from "./pages/WatchListPage";

function App() {
  const [watchList, setWatchList] = useState(() => {
    const item = getItem('watchList');
    return item || [];
  });

  useEffect(() => {
    setItem('watchList', watchList);
  }, [watchList]);

  const addToWatchList = (movie) => {
    const alreadyAdded = watchList.some(item => item.id ===movie.id);

    if(alreadyAdded) {
      setWatchList(prevList => prevList.filter(item => item.id !== movie.id));
    } else {
      setWatchList(prevList => [ ...prevList, 
        { 
          id: movie.id,
          title: movie.title,
          posterPath: movie.posterPath,
          releaseDate: movie.releaseDate,
          watched: false,
        }
      ]);
    }
  };

  return (
   <Routes>
    <Route path="/" element={<HomePage watchList={watchList} addToWatchList={addToWatchList} />} />
    <Route path="/movie/:id" element={<MovieDetailsPage />} />
    <Route path="/watchlist" element={<WatchListPage watchList={watchList} setWatchList={setWatchList} />} />
    <Route path="/movies/:category" element={<MoviesPage watchList={watchList} addToWatchList={addToWatchList} />} />
   </Routes>
  );
}

export default App