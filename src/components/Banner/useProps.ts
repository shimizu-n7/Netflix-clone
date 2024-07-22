import { useEffect, useState } from "react";
import { Movie } from "../../type";
import axios from "../../axios";
import { requests } from "../../request";

export const useProps = () => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    // MEMO: ここで時間計測して、一定時間ごとにsetするバナーを変えてもいいかも？

    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const tempVal =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];

      const movie: Movie = {
        id: tempVal.id,
        name: tempVal.name,
        poster_path: tempVal.poster_path,
        backdrop_path: tempVal.backdrop_path,
        overview: tempVal.overview,
      };

      // ①取得した映像データからランダムでmovieに格納
      setMovie(movie);
    }

    fetchData();
  }, []);

  // ②descriptionの切り捨て用の関数
  const truncate = (str: string | undefined, n: number) => {
    if (!str) {
      return "";
    }
    return str.length > n ? str?.substring(0, n - 1) + "..." : str;
  };

  return { movie, truncate };
};
