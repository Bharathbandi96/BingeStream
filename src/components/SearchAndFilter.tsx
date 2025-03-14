import { Search, X } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { cn } from '../lib/utils';

export function SearchAndFilter() {
  const { 
    searchTerm, 
    setSearchTerm, 
    selectedCategories, 
    toggleCategory, 
    allCategories 
  } = useContent();

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search titles..."
          className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={cn(
              "px-3 py-1 rounded-full text-sm font-medium transition-colors",
              selectedCategories.includes(category)
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}