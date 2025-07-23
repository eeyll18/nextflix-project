import Image from "next/image";
import { Movie } from "../types";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

interface HeroProps {
  movie: Movie;
}

const Hero = ({ movie }: HeroProps) => {
  const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="relative h-[50vh] md:h-[80vh] w-full">
      {movie.backdrop_path && (
        <Image
          src={`${TMDB_IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover" 
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />

      <div className="relative z-20 flex flex-col justify-end h-full pb-10 md:pb-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          {movie.title}
        </h1>
        <p className="text-sm md:text-lg text-white mt-4 max-w-md drop-shadow-lg">
          {movie.overview.length > 150
            ? `${movie.overview.substring(0, 150)}`
            : movie.overview}
        </p>
        <div className="flex space-x-3 mt-6">
          <button className="flex items-center justify-center bg-white text-black font-bold px-4 md:px-6 py-2 rounded hover:bg-gray-200 transition">
            <FaPlay className="mr-2" /> Play
          </button>
          <button className="flex items-center justify-center bg-gray-500 bg-opacity-70 text-white font-bold px-4 md:px-6 py-2 rounded hover:bg-gray-600 transition">
            <FaInfoCircle className="mr-2" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
