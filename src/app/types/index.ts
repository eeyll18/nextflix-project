export interface Movie {
  id: number;
  adult: boolean;
  title: string;
  original_title: string;
  original_language:string
  video:boolean
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  popularity: number;
  genre_ids: number[];
  vote_count:number
}

export interface Genre {
  id: number;
  name: string;
}
