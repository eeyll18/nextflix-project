import { Genre } from "../types";

interface GenreSelectorProps {
  genres: Genre[];
  selectedGenre: number | null;
  onSelectGenre: (genreId: number | null) => void;
}

const GenreSelector = ({
  genres,
  selectedGenre,
  onSelectGenre,
}: GenreSelectorProps) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 my-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectGenre(null)}
          className={`px-4 py-2 text-sm rounded-full transition ${
            selectedGenre === null
              ? "bg-red-600 text-white font-bold"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => onSelectGenre(genre.id)}
            className={`px-4 py-2 text-sm rounded-full transition ${
              selectedGenre === genre.id
                ? "bg-red-600 text-white font-bold"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreSelector;
