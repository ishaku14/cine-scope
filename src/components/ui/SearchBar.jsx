import SearchIcon from "../../assets/icons/search-icon.png";

function SearchBar() {
  return (
    <section className="px-5 mb-8">
      <div className="flex relative w-full mb-2.5 max-w-150">
        <img
          className="h-5 cursor-pointer absolute top-[50%] left-2.5 translate-y-[-50%]"
          src={SearchIcon}
          alt="search icon image"
        />
        <input
          className="bg-background/90 w-full text-[1rem] rounded-[10px] border-white border-none outline-none py-4 px-10 placeholder:text-gray-300   focus:border-accent focus:ring-2 focus:ring-accent transition-all"
          type="text"
          placeholder="search movie, actors, genres..."
        />
      </div>
    </section>
  );
}

export default SearchBar;