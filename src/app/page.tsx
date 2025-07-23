"use client";
import { useMemo, useState } from "react";
import Header from "./components/Header";
import { genreData, getGenreNameById, movieData } from "./lib/data";
import Hero from "./components/Hero";
import GenreSelector from "./components/GenreSelector";
import MovieCarousel from "./components/MovieCarousel";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  const popularMovies = useMemo(
    () => [...movieData.results].sort((a, b) => b.popularity - a.popularity),
    []
  );

  const topRatedMovies = useMemo(
    () =>
      [...movieData.results].sort((a, b) => b.vote_average - a.vote_average),
    []
  );

  const filteredMovies = useMemo(() => {
    if (selectedGenre === null) return [];
    return movieData.results.filter((movie) =>
      movie.genre_ids.includes(selectedGenre)
    );
  }, [selectedGenre]);

  const selectedGenreName = selectedGenre
    ? getGenreNameById(selectedGenre)
    : "";

  return (
    <main className="relative bg-black min-h-screen">
      <Header />

      {popularMovies.length > 0 && <Hero movie={popularMovies[1]} />}

      <div className="pt-8">
        <GenreSelector
          genres={genreData.genres}
          onSelectGenre={setSelectedGenre}
          selectedGenre={selectedGenre}
        />

        {selectedGenre !== null ? (
          <MovieCarousel
            title={`${selectedGenreName}`}
            movies={filteredMovies}
          />
        ) : (
          <>
            <MovieCarousel title="Popular on Nextflix" movies={popularMovies} />
            <MovieCarousel title="Top Rated" movies={topRatedMovies} />
          </>
        )}
      </div>
    </main>
  );
}
