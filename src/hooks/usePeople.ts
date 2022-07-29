import { useCallback, useMemo, useState } from "react";
import { Person } from "../types";
import data from "../data/people.json";

const PAGE_COUNT = 15;

type Result = {
  results: Person[];
  filterResults: (query: string) => void;
  reset: () => void;
  loadMore: () => void;
  page: number;
  hasNext: boolean;
  loading: boolean;
};

export const usePeople = (): Result => {
  const [results, setResults] = useState<Person[]>(() => data);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //check to see if there are still data to display
  const hasNext = useMemo(
    () => results.length > results.slice(0, page * PAGE_COUNT).length,
    [results, page]
  );

  const resultsToDisplay = useMemo(
    () => results.slice(0, page * PAGE_COUNT),
    [results, page]
  );

  // handles actual filtering
  const filterResults = useCallback(
    (query: string) => {
      setLoading(true);
      // searching the data over and over again to get all the searched value
      const newResults = data.filter(
        ({ name, description }) =>
          name?.toLowerCase().includes(query.toLowerCase()) ||
          description?.toLowerCase().includes(query.toLowerCase())
      );
      setLoading(false);
      setResults(newResults);
      setPage(1);
    },
    [results]
  );

  // handle resetting state
  const reset = useCallback(() => {
    setPage(1);
    setResults(data);
  }, []);

  // handles fetching more results once user has scrolled to the bottom
  const loadMore = useCallback(() => {
    if (hasNext) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasNext]);

  return {
    results: resultsToDisplay,
    filterResults,
    reset,
    loadMore,
    page,
    hasNext,
    loading,
  };
};
