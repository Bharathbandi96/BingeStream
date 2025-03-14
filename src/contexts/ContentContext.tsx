import React, { createContext, useContext, useState } from 'react';
import { ALL_CATEGORIES } from './data';
import {ContentContextType, IWatchlistProps} from './types';

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filterContent = (content: IWatchlistProps[]) => {
    return content.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategories = selectedCategories.length === 0 || 
        selectedCategories.some(cat => item.categories.includes(cat));
      return matchesSearch && matchesCategories;
    });
  };

  return (
    <ContentContext.Provider value={{
      searchTerm,
      setSearchTerm,
      selectedCategories,
      toggleCategory,
      filterContent,
      allCategories: ALL_CATEGORIES
    }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}