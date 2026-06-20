function CastRow({ cast }) {
  if(!cast) return null;

  return (
  <section aria-labelledby="cast-heading">
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-1 h-5 bg-accent rounded-sm" aria-hidden="true" />
      <h2 id="cast-heading" className="text-xl font-bold tracking-tight text-white">
        Cast
      </h2>
    </div>

    <div className="flex gap-4 pb-2 overflow-x-auto scrollbar-none mask-[linear-gradient(to_right,transparent_0,black_0.5rem,black_calc(100%-3rem),transparent_100%)]">
      {cast.map((member) => (
        <div key={member.cast_id} className="group flex-none flex flex-col items-center gap-2 w-18 sm:w-20 transition-transform duration-200 ease-out    hover:-translate-y-1.5 cursor-default">
          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-none border border-white/10 bg-white/5">
            <img
              className="w-full h-full object-cover object-top"
              src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
              alt={member.name}
            />
          </div>

          <p className="text-[0.72rem] text-white/70 text-center leading-snug line-clamp-2 w-full group-hover:text-accent">
            {member.name}
          </p>
        </div>
      ))}
    </div>
  </section>
);
}

export default CastRow;