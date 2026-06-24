function SearchBar({query, setQuery }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-6 relative z-20 mb-10">
      <div className="relative m-auto w-full max-w-2xl">
        <input className="w-full bg-white/6  border border-white/8 rounded-xl text-white text-[0.9rem] pl-9 pr-4 py-3 sm:py-3.5 placeholder:text-white/30 placeholder:text-[0.82rem] outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200" type="text"  placeholder="Search movies, actors, genres..." value={query} onChange={(e) => setQuery(e.target.value)}/>
      </div>
    </section>
  );
}

export default SearchBar;