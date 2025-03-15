import React, { createContext, useContext, useState } from 'react';
import { WatchlistContextType, IWatchlistProps } from './types';

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export function WatchlistProvider({ children }: { children: React.ReactNode }) {
  const [watchlist, setWatchlist] = useState<IWatchlistProps[]>([]);

  const addToWatchlist = (content: IWatchlistProps) => {
    setWatchlist((prev) => {
      if (!prev.some((item) => item.id === content.id)) {
        return [...prev, content];
      }
      return prev;
    });
  };

  const removeFromWatchlist = (id: string) => {
    setWatchlist((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWatchlist = (id: string) => {
    return watchlist.some((item) => item.id === id);
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
}