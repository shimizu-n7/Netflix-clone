import YouTube from "react-youtube";
import { Movie } from "../../type";

type LayoutProps = {
  title: string;
  isLargeRow?: boolean;
  movies: Movie[];
  trailerUrl: string | null;
  handleClick: (movie: Movie) => void;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Layout = ({
  title,
  isLargeRow = false,
  movies,
  trailerUrl,
  handleClick,
}: LayoutProps) => {
  const image_url = "https://image.tmdb.org/t/p/original";

  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="ml-5 text-white">
      <h2>{title}</h2>
      {movies.length > 0 && (
        <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar-hide">
          {movies.map((movie) => {
            const getImagePath = (path: string | null) => (path ? path : "");

            const imgPath = getImagePath(
              isLargeRow ? movie.poster_path : movie.backdrop_path
            );

            return (
              <img
                key={movie.id}
                className={`object-contain w-full max-h-24 m-2 transform transition-transform duration-450 ${
                  isLargeRow ? "max-h-60 hover:scale-110" : "hover:scale-108"
                }`}
                src={`${image_url}/${imgPath}`}
                onClick={() => handleClick(movie)}
                alt={movie.name}
              />
            );
          })}
        </div>
      )}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
