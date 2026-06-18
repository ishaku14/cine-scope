function getGenreNames(genreIds, genres) {
  return genreIds?.map((id) => {
    const genre = genres.find((genre) => genre.id === id);
    return genre?.name;
  });
}

export default getGenreNames;