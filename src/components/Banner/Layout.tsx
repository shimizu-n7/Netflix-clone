import { Movie } from "../../type";

type Props = {
  movie: Movie | undefined;
  truncate: (str: string | undefined, n: number) => string;
};

export const Layout = ({ movie, truncate }: Props) => {
  const path = movie?.backdrop_path
    ? `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    : "";

  return (
    <>
      {movie && movie.backdrop_path ? (
        <header
          className="text-white object-contain"
          style={{
            backgroundSize: "cover",
            backgroundImage: path,
            backgroundPosition: "center center",
          }}
        >
          <div className="ml-8 pt-36">
            <h1 className="text-6xl font-extrabold pb-1">{movie?.name}</h1>
            <div className="w-[45rem] leading-[1.3] pt-4 text-sm max-w-[360px] h-[80px]">
              {movie && truncate(movie?.overview, 150)}
            </div>
          </div>

          {/* ① Tailwindのグラデーション */}
          <div className="h-[7.4rem] bg-gradual-gradient" />
        </header>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
