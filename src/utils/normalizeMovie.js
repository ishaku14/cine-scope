function normalizeMovie(item) {
  return {
    id: item.id,
    title: item.title || item.name,
    originalTitle: item.original_title || item.original_name,
    posterPath: item.poster_path,
    releaseDate: item.release_date || item.first_air_date,
    backdrop: item.backdrop_path,
    overview: item.overview,
    adult: item.adult
  }
}

export default normalizeMovie;