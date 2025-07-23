import { Movie } from "../types";
import MovieCard from "./MovieCard";

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
}

const MovieCarousel = ({ title, movies }: MovieCarouselProps) => {
  return (
    <div className="my-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 px-4 sm:px-6 lg:px-8">
        {title}
      </h2>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-scroll overflow-y-hidden pb-4 pl-4 sm:pl-6 lg:pl-8 scrollbar-hide">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
