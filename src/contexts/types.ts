import { IMovieCardProps } from "../components/types";

export interface IWatchlistProps {
  id: string;
  title: string;
  image: string;
  categories: string[];
}

export interface WatchlistContextType {
  watchlist: IMovieCardProps[];
  addToWatchlist: (content: IMovieCardProps) => void;
  removeFromWatchlist: (id: string) => void;
  isInWatchlist: (id: string) => boolean;
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
  getContentById: (id: string) => any; //This need to be fixed
  getContentByIds: (id: string[]) => any; //This as well
  filterContent: (content: IMovieCardProps[]) => IMovieCardProps[];
  allCategories: string[];
}
