import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un numero");
      return;
    }
    if (search.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}

function App() {
  const { search, setSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    // const query = Object.fromEntries(new window.FormData(event.target));
    // console.log(query);
    getMovies();
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header>
        <h1 className="mb-5">Search Films</h1>
        <form className="flex felx-col gap-5" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="query"
            className="border border-gray-300 rounded-md p-2"
            type="text"
            placeholder="Avengers, Start War ..."
          />
          <button className="bg-amber-600" type="submit">
            Search
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
