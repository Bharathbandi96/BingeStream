import { Search, Bell, Menu, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/95 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-red-600 font-bold text-2xl">BingeStream</Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                <Link to="/movies" className="text-white hover:text-gray-300">Movies</Link>
                <Link to="/tv-show" className="text-white hover:text-gray-300">TV Shows</Link>
                <Link to="/my-list" className="text-white hover:text-gray-300">My List</Link>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">
              {/* <Search className="w-5 h-5" /> */}
            </button>
            <button className="text-white hover:text-gray-300">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-gray-300">
              <User className="w-5 h-5" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-white hover:text-gray-300 px-3 py-2">Home</Link>
            <Link to="/movies" className="block text-white hover:text-gray-300 px-3 py-2">Movies</Link>
            <Link to="/tv-show" className="block text-white hover:text-gray-300 px-3 py-2">TV Shows</Link>
            <Link to="/my-list" className="block text-white hover:text-gray-300 px-3 py-2">My List</Link>
          </div>
        </div>
      )}
    </nav>
  );
}