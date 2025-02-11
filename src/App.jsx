import { useState, useCallback } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { search, setSearch, error } = useSearch();
  const [sort, setSort] = useState(false);
  const { movies, loading, getMovies } = useMovies({ search, sort });
  const xIcon = "./imageIcon/x.svg";
  const searchIcon = "./imageIcon/search.svg";

  const handleSubmit = (event) => {
    event.preventDefault();
    // const query = Object.fromEntries(new window.FormData(event.target));
    // console.log(query);
    getMovies({ search });
  };

  const debounceGetMovies = useCallback(
    debounce(({ search }) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(event.target.value);
    debounceGetMovies({ search: newSearch });
  };

  const handleEraseSearch = () => {
    setSearch("");
  };

  return (
    <div className="flex flex-col items-center justify-items-start min-h-screen">
      <header>
        <h1 className="mb-5 mt-5">Search Films</h1>
        <div className="border border-gray-200 rounded-full flex items-center justify-center focus-within:border-blue-500">
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center gap-2"
          >
            <button
              className=" bg-gray-400 rounded-full h-8 w-8 items-center justify-center m-2 relative"
              type="submit"
            >
              <img
                src={searchIcon}
                alt="Image of search"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </button>
            <input
              onChange={handleChange}
              value={search}
              name="query"
              className="h-10 flex-grow bg-transparent outline-none px-2"
              type="text"
              placeholder="Avengers, Start War ..."
            />
            <button className="bg-gray-400 rounded-full h-8 w-8 items-center justify-center relative hover:bg-amber-50">
              <img
                src={xIcon}
                alt="X icon"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={handleEraseSearch}
              />
            </button>
            <div className="flex flex-auto">
              <p>A-Z</p>
              <input
                type="checkbox"
                className="ml-1.5 mr-2"
                onChange={handleSort}
                checked={sort}
              />
            </div>
          </form>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </header>
      <main className="mt-5">
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
