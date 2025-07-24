import Image from "next/image";
import { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="group flex-shrink-0 w-36 md:w-48 cursor-pointer transform hover:scale-105 transition-transform duration-200">
      <div className="relative w-full h-[225px] md:h-[288px] rounded-md overflow-hidden">
        {movie.poster_path ? (
          <Image
            src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            fill
            sizes="(max-width: 768px) 33vw, 12rem"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-white text-sm">No Image</span>
          </div>
        )}
      </div>
      <div className="p-2">
        <h3 className="text-white text-sm font-bold truncate  transition-colors">
          {movie.title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
