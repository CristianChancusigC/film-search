function ListOfMovies({ movies }) {
  return (
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
    w-auto gap-4 mt-8"
    >
      {/* <ul className="grid auto-cols-max grid-flow-col w-auto gap-4"> */}
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2 className="mb-1">{movie.title}</h2>
          <p className="mb-2">{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoMovieResult() {
  return <p>No films</p>;
}

export function Movies({ movies }) {
  const hasMovie = movies?.length > 0;

  return hasMovie ? <ListOfMovies movies={movies} /> : <NoMovieResult />;
}
