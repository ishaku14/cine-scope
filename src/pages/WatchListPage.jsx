import { Link } from "react-router"
import { HiOutlineBookOpen } from "react-icons/hi"
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import WatchListCard from "../components/ui/WatchListCard";

function watchListPage({ watchList, setWatchList }) {
  if(!watchList) return null;

  const unwatched = watchList?.filter(m => !m.watched)
  const watched = watchList?.filter(m => m.watched)

  return (
    <div className="min-h-screen mt-16 bg-background text-white">
      <Header watchList={watchList} />

      <main className="px-4 sm:px-6 lg:px-8 pb-16">
        {/* Page title */}
        <div className="flex items-center gap-3 mt-2 mb-8">
          <span className="block w-1 h-6 bg-accent rounded-sm" />
          <h1 className="text-2xl font-bold tracking-tight">My watchList</h1>
          {watchList.length > 0 && (
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-white/30 ml-1">
              {watchList?.length} {watchList.length === 1 ? "movie" : "movies"}
            </span>
          )}
        </div>

        {/* Empty state */}
        {watchList.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4 mt-24 text-center">
            <HiOutlineBookOpen size={48} className="text-white/15" />
            <p className="text-white/40 text-[0.9rem]">
              Nothing saved yet. Browse movies and add them to your watchList.
            </p>
            <Link to="/" className="mt-2 text-[0.78rem] font-semibold uppercase tracking-widest text-accent hover:opacity-75 transition-opacity">
              Browse movies
            </Link>
          </div>
        )}

        {/* To watch */}
        {unwatched.length > 0 && (
          <section aria-labelledby="unwatched-heading" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-1 h-5 bg-accent rounded-sm" aria-hidden="true" />
              <h2 className="text-xl font-bold tracking-tight">
                To watch
              </h2>
              <span className="text-[0.68rem] uppercase tracking-widest text-white/30">
                {unwatched.length}
              </span>
            </div>

            <div className="grid gap-4 [grid-template-columns:repeat(auto-fill, minmax(130px, 1fr))]"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}>
              {unwatched.map(movie => (
                <WatchListCard key={movie.id} movie={movie} setWatchList={setWatchList} />
              ))}
            </div>
          </section>
        )}

        {/* Watched */}
        {watched.length > 0 && (
          <section aria-labelledby="watched-heading">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-1 h-5 bg-white/20 rounded-sm" aria-hidden="true" />
              <h2 id="watched-heading"
                  className="text-xl font-bold tracking-tight text-white/50">
                Watched
              </h2>
              <span className="text-[0.68rem] uppercase tracking-widest text-white/25">
                {watched.length}
              </span>
            </div>

            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}>
              {watched.map(movie => (
                <WatchListCard key={movie.id} movie={movie} setWatchList={setWatchList} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default watchListPage