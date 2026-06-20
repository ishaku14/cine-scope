import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movie/:id" element={<MovieDetailsPage />} />
    <Route path="/favorites" element={<FavoritesPage />} />
   </Routes>
  )
}

export default App
