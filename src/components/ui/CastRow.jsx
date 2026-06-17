function CastRow({ cast }) {
  if(!cast) return null;

  return (
    <section>
      <div className="flex justify-between text-white mb-4 px-4">
        <span className="text-2xl font-bold">Cast</span>
        <span className="text-purple-200">See All</span>
      </div>

      <div className="flex gap-5 overflow-auto pl-4 mb-4">
        {cast.map((cast) => (
          <div key={cast.cast_id} className="flex flex-col">
            <div className="bg-white w-20 h-20 rounded-full"><img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="" /></div>
            <p>{cast.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CastRow;
