import { Play, Plus, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { useWatchlist } from '../contexts/WatchlistContext';

interface MovieCardProps {
  title: string;
  image: string;
  className?: string;
}

export function MovieCard({ title, image, className }: MovieCardProps) {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const inWatchlist = isInWatchlist(title);

  const handleWatchlistClick = () => {
    if (inWatchlist) {
      removeFromWatchlist(title);
    } else {
      addToWatchlist({ title, image });
    }
  };

  return (
    <div className={cn("group relative overflow-hidden rounded-lg", className)}>
      <img 
        src={image} 
        alt={title}
        className="w-full aspect-[2/3] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300"> {/*opacity-0 group-hover:opacity-100*/}
        <div className="absolute bottom-0 p-4 w-full">
          <h3 className="text-white font-semibold mb-2">{title}</h3>
          <div className="flex gap-2">
            <button className="bg-white text-black p-2 rounded-full hover:bg-white/90">
              <Play className="w-4 h-4" />
            </button>
            <button 
              className={cn(
                "p-2 rounded-full transition-colors",
                inWatchlist 
                  ? "bg-green-500 text-white hover:bg-green-600" 
                  : "bg-white/20 text-white hover:bg-white/30"
              )}
              onClick={handleWatchlistClick}
            >
              {inWatchlist ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}