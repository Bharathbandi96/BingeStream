// import { Play, Plus, Check } from 'lucide-react';
// import { cn } from '../lib/utils';
// import { useWatchlist } from '../contexts/WatchlistContext';
// import { IMovieCardProps } from './types';

// export function MovieCard({ title, image, categories, className }: IMovieCardProps) {
//   const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
//   const inWatchlist = isInWatchlist(title);

//   const handleWatchlistClick = () => {
//     if (inWatchlist) {
//       removeFromWatchlist(title);
//     } else {
//       addToWatchlist({ title, image, categories });
//     }
//   };

//   return (
//     <div className={cn("group relative overflow-hidden rounded-lg", className)}>
//       <img 
//         src={image} 
//         alt={title}
//         className="w-full aspect-[2/3] object-cover transition-transform duration-300 group-hover:scale-105"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300"> {/*opacity-0 group-hover:opacity-100*/}
//         <div className="absolute bottom-0 p-4 w-full">
//           <h3 className="text-white font-semibold mb-2">{title}</h3>
//           <div className="flex gap-2">
//             <button className="bg-white text-black p-2 rounded-full hover:bg-white/90">
//               <Play className="w-4 h-4" />
//             </button>
//             <button 
//               className={cn(
//                 "p-2 rounded-full transition-colors",
//                 inWatchlist 
//                   ? "bg-green-500 text-white hover:bg-green-600" 
//                   : "bg-white/20 text-white hover:bg-white/30"
//               )}
//               onClick={handleWatchlistClick}
//             >
//               {inWatchlist ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Play, Plus, Check, Info } from 'lucide-react';
import { cn } from '../lib/utils';
import { useWatchlist } from '../contexts/WatchlistContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  id?: string;
  title: string;
  image: string;
  description?: string;
  rating?: number;
  year?: number;
  duration?: string;
  quality?: string[];
  maturityRating?: string;
  className?: string;
  categories?: string[];
}

export function MovieCard({ 
  id = 'inception', // Temporary default for mock data
  title, 
  image, 
  description, 
  rating, 
  year,
  duration,
  quality = [],
  maturityRating,
  categories= ['Sci-Fi', 'Horror'],
  className 
}: MovieCardProps) {
  const navigate = useNavigate();
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const [isHovered, setIsHovered] = useState(false);
  const inWatchlist = isInWatchlist(title);

  const handleWatchlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWatchlist) {
      removeFromWatchlist(title);
      toast.success('Removed from My List');
    } else {
      addToWatchlist({ title, image, categories });
      toast.success('Added to My List');
    }
  };

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/content/${id}`);
  };

  return (
    <motion.div
      className={cn("group relative overflow-hidden rounded-lg cursor-pointer", className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onClick={handleInfoClick}
    >
      <motion.img 
        src={image} 
        alt={title}
        className="w-full aspect-[2/3] object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div 
          className="absolute bottom-0 p-4 w-full"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-white font-semibold mb-1">{title}</h3>
          {description && (
            <p className="text-gray-300 text-sm line-clamp-2 mb-2">{description}</p>
          )}
          
          <div className="flex items-center gap-2 mb-2">
            {rating && <span className="text-green-400 text-sm">{rating.toFixed(1)}</span>}
            {year && <span className="text-gray-300 text-sm">{year}</span>}
            {duration && <span className="text-gray-300 text-sm">{duration}</span>}
            {maturityRating && (
              <span className="text-gray-300 text-xs border border-gray-500 px-1 rounded">
                {maturityRating}
              </span>
            )}
          </div>

          {quality.length > 0 && (
            <div className="flex gap-1 mb-3">
              {quality.map(q => (
                <span key={q} className="text-xs bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded">
                  {q}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-2">
            <motion.button 
              className="bg-white text-black p-2 rounded-full hover:bg-white/90"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e: any) => {
                e.stopPropagation();
                navigate(`/content/${id}?autoplay=true`);
              }}
            >
              <Play className="w-4 h-4" />
            </motion.button>
            <motion.button 
              className={cn(
                "p-2 rounded-full transition-colors",
                inWatchlist 
                  ? "bg-green-500 text-white hover:bg-green-600" 
                  : "bg-white/20 text-white hover:bg-white/30"
              )}
              onClick={handleWatchlistClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {inWatchlist ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </motion.button>
            <motion.button 
              className="bg-white/20 text-white p-2 rounded-full hover:bg-white/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleInfoClick}
            >
              <Info className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}