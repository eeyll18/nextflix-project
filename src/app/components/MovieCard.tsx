import Image from 'next/image';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  console.log(movie.poster_path)

  return (
    <div className="group relative flex-shrink-0 w-36 md:w-48 cursor-pointer transform hover:scale-105 transition-transform duration-200">
      {movie.poster_path ? (
        <Image
          src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          width={200}
          height={300}
          className="rounded-md object-cover"
        />
      ) : (
        <div className="w-full h-[300px] bg-gray-800 rounded-md flex items-center justify-center">
          <span className="text-white text-sm">No Image</span>
        </div>
      )}
       <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-md flex items-end p-2">
        <h3 className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {movie.title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;