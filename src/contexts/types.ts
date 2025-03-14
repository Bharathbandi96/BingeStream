export interface IWatchlistProps {
  title: string;
  image: string;
  categories: string[];
}

export interface WatchlistContextType {
  watchlist: IWatchlistProps[];
  addToWatchlist: (content: IWatchlistProps) => void;
  removeFromWatchlist: (title: string) => void;
  isInWatchlist: (title: string) => boolean;
}

export interface Content {
  title: string;
  image: string;
  type: 'movie' | 'tv';
  categories: string[];
  year?: number;
  rating?: number;
}

export interface ContentContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  filterContent: (content: IWatchlistProps[]) => IWatchlistProps[];
  allCategories: string[];
}
