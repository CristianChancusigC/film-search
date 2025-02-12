import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("You can't look for an empty film.");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("You can't search for a film with a number.");
      return;
    }
    if (search.length < 3) {
      setError("The search must be at least 3 characters long.");
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
