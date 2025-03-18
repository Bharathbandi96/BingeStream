import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MovieCard } from './components/MovieCard';
import { SearchAndFilter } from './components/SearchAndFilter';
import { WatchlistProvider } from './contexts/WatchlistContext';
import { ContentProvider, useContent } from './contexts/ContentContext';
import { useWatchlist } from './contexts/WatchlistContext';
import CONTENT_DATA from './data';
import { INoResulpProps, IGridProps } from './types';
import { ContentDetails } from './components/ContentDetails';

function NoResults({ searchTerm, selectedCategories }: INoResulpProps) {
  return (
    <div className="text-center py-12">
      <p className="text-gray-400 text-lg mb-2">
        {searchTerm && selectedCategories.length > 0 && (
          <>No results found for "{searchTerm}" in selected categories</>
        )}
        {searchTerm && !selectedCategories.length && (
          <>No results found for "{searchTerm}"</>
        )}
        {!searchTerm && selectedCategories.length > 0 && (
          <>No content found in selected categories</>
        )}
      </p>
      <p className="text-gray-500">
        Try adjusting your search terms or filters
      </p>
    </div>
  );
}

function ContentGrid({ title, items, type }: IGridProps) {
  const { filterContent, searchTerm, selectedCategories } = useContent();
  const filteredItems = filterContent(items);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <MovieCard
              key={item.id}
              title={item.title}
              type={type}
              image={item.image}
              categories={item.categories}
              id={item.id}
              description={item.description}
              rating={item.rating}
              year={item.year}
              duration={item.duration}
              quality={item.quality}
              maturityRating={item.maturityRating}
            />
          ))}
        </div>
      ) : (
        <NoResults searchTerm={searchTerm} selectedCategories={selectedCategories} />
      )}
    </div>
  );
}

function Home() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60"
          alt="Featured Movie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold mb-4">Hello Streamer,</h1>
              <p className="text-lg mb-6">
                Watch the latest blockbuster movies and TV shows in stunning 4K quality.
                Stream anywhere, anytime.
              </p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchAndFilter />
      </div>

      <ContentGrid title="Trending Now" items={CONTENT_DATA.movies} type="movie" />
      <ContentGrid title="Popular TV Shows" items={CONTENT_DATA.tvShows} type="tv-show" />
    </main>
  );
}

function Movies() {
  const { searchTerm, selectedCategories } = useContent();
  const hasActiveFilters = searchTerm || selectedCategories.length > 0;

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Movies</h1>
        <SearchAndFilter />
        {hasActiveFilters ? (
          <ContentGrid title="Search Results" items={CONTENT_DATA.movies} type="movie" />
        ) : (
          <div className="space-y-12">
            <ContentGrid title="Action & Adventure" items={CONTENT_DATA.movies.filter(m =>
              m.categories.includes('Action') || m.categories.includes('Adventure')
            )} type="movie" />
            <ContentGrid title="Sci-Fi & Fantasy" items={CONTENT_DATA.movies.filter(m =>
              m.categories.includes('Sci-Fi') || m.categories.includes('Fantasy')
            )} type="movie" />
            <ContentGrid title="Comedy & Family" items={CONTENT_DATA.movies.filter(m =>
              m.categories.includes('Comedy') || m.categories.includes('Family')
            )} type="movie" />
            <ContentGrid title="Horror & Thriller" items={CONTENT_DATA.movies.filter(m =>
              m.categories.includes('Horror') || m.categories.includes('Thriller')
            )} type="movie" />
          </div>
        )}
      </div>
    </main>
  );
}

function TVShows() {
  const { searchTerm, selectedCategories } = useContent();
  const hasActiveFilters = searchTerm || selectedCategories.length > 0;

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">TV Shows</h1>
        <SearchAndFilter />
        {hasActiveFilters ? (
          <ContentGrid title="Search Results" items={CONTENT_DATA.tvShows} type="tv-show" />
        ) : (
          <div className="space-y-12">
            <ContentGrid title="Popular on BingeStream" items={CONTENT_DATA.tvShows} type="tv-show" />
            <ContentGrid title="Crime & Mystery" items={CONTENT_DATA.tvShows.filter(show =>
              show.categories.includes('Crime') || show.categories.includes('Mystery')
            )} type="tv-show" />
            <ContentGrid title="Fantasy & Adventure" items={CONTENT_DATA.tvShows.filter(show =>
              show.categories.includes('Fantasy') || show.categories.includes('Adventure')
            )} type="tv-show" />
            <ContentGrid title="Comedy & Family" items={CONTENT_DATA.tvShows.filter(show =>
              show.categories.includes('Comedy') || show.categories.includes('Family')
            )} type="tv-show" />
          </div>
        )}
      </div>
    </main>
  );
}

function MovieContent() {
  const { id, type } = useParams();
  const { getContentById } = useContent()
  const content = getContentById(id as string, type as string);

  return <ContentDetails content={content} />
}

function MyList() {
  const { watchlist } = useWatchlist();
  const { getContentByIds } = useContent();
  const { filterContent, searchTerm, selectedCategories } = useContent();
  const movieIds: string[] = [];
  const tvShowIds: string[] = [];
  watchlist.forEach(({ id, type }) => {
    if (type === 'movie') {
      movieIds.push(id)
    }
    if (type === 'tv-show') {
      tvShowIds.push(id);
    }
  });
  const movieContent = getContentByIds(movieIds);
  const tvShowContent = getContentByIds(tvShowIds);

  const filteredMovieWatchlist = filterContent(movieContent);
  const filteredTVShowWatchlist = filterContent(tvShowContent);

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">My List</h1>
        <SearchAndFilter />
        {(watchlist.length > 0) ? (
          <>
            {(filteredMovieWatchlist.length > 0) &&
              <ContentGrid title="Movies Saved for Later" items={filteredMovieWatchlist} type='movie' />}
            {(filteredTVShowWatchlist.length > 0) &&
              <ContentGrid title="TV Shows Saved for Later" items={filteredTVShowWatchlist} type='tv-show' />
            }
            {(filteredMovieWatchlist.length === 0 && filteredTVShowWatchlist.length === 0) && <NoResults searchTerm={searchTerm} selectedCategories={selectedCategories} />}
          </>
        ) : <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            Your watchlist is empty. Add some movies or TV shows to watch later!
          </p>
        </div>
        }
        {/* {watchlist.length > 0 ? (
          filteredMovieWatchlist.length > 0 ? (
            <ContentGrid title="Movies Saved for Later" items={filteredMovieWatchlist} type='movie' />
          ) : (filteredTVShowWatchlist.length > 0 ?
            <ContentGrid title="TV Shows Saved for Later" items={filteredTVShowWatchlist} type='tv-show' /> : (
              <NoResults searchTerm={searchTerm} selectedCategories={selectedCategories} />
            ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Your watchlist is empty. Add some movies or TV shows to watch later!
            </p>
          </div>
        )} */}
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <ContentProvider>
        <WatchlistProvider>
          <div className="min-h-screen bg-black">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tv-show" element={<TVShows />} />
              <Route path="/my-list" element={<MyList />} />
              <Route path="/content/:type/:id" element={<MovieContent />} />
            </Routes>
          </div>
        </WatchlistProvider>
      </ContentProvider>
    </Router>
  );
}

export default App;