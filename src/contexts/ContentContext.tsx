import React, { createContext, useContext, useState } from 'react';
import { ALL_CATEGORIES } from './data';
import { ContentContextType } from './types';
import { IMovieCardProps } from '../components/types';
import CONTENT_DATA from '../data';

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

  const filterContent = (content: IMovieCardProps[]) => {
    return content.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategories = selectedCategories.length === 0 ||
        selectedCategories.some(cat => item.categories.includes(cat));
      return matchesSearch && matchesCategories;
    });
  };

  const getContentById = (id: string) => {
    let content = {};
    for (const key in CONTENT_DATA) {
      content = CONTENT_DATA[key].find(item => item.id === id) as IMovieCardProps;
    }
    return content;
  }

  const getContentByIds = (ids: string[]) => {
    let content: IMovieCardProps[] = [];
    for (const key in CONTENT_DATA) {
      content = CONTENT_DATA[key].filter(item => ids.includes(item.id)) as IMovieCardProps[];
    }
    return content;
  }

  return (
    <ContentContext.Provider value={{
      searchTerm,
      setSearchTerm,
      selectedCategories,
      toggleCategory,
      filterContent,
      getContentById,
      getContentByIds,
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