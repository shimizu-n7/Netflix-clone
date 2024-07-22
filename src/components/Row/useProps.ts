import axios from "../../axios";
import { useEffect, useState } from "react";

export type Movie = {
  id: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export const useProps = (fetchUrl: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      const movies = request.data.results.map((movie: Movie) => ({
        id: movie.id,
        name: movie.name,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      }));

      setMovies(movies);

      //  MEMO: 今回はreturnはいらない？
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return { movies };
};
