import React, { createContext, useContext, useState } from 'react';

export interface Content {
  title: string;
  image: string;
  type: 'movie' | 'tv';
  categories: string[];
  year: number;
  rating: number;
}

interface ContentContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  filterContent: (content: Content[]) => Content[];
  allCategories: string[];
}

const ALL_CATEGORIES = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Crime',
  'Documentary', 'Drama', 'Family', 'Fantasy', 'Horror',
  'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'War'
];

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

  const filterContent = (content: Content[]) => {
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