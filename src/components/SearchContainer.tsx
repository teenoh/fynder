import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { usePeople } from "../hooks/usePeople";
import { Box } from "./Box";
import { Text } from "./Text";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const { results, filterResults, reset, loadMore, loading } = usePeople();
  const lastItemRef = useRef<HTMLDivElement>(null); // used to track if the bottom of the page has been reached
  const debouncedQuery = useDebounce(query, 150);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (debouncedQuery) {
      filterResults(debouncedQuery);
    } else {
      reset();
    }
  }, [debouncedQuery]);

  useEffect(() => {
    if (!lastItemRef.current) return;
    // Logic to handle infinite scrolling
    const observer = new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          loadMore();
        }
      },
      {
        rootMargin: "0px 0px 200px 0px",
      }
    );

    observer.observe(lastItemRef.current);

    return () => {
      if (lastItemRef.current) {
        observer.unobserve(lastItemRef.current);
      }
    };
  }, [loadMore]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearQuery = useCallback(() => {
    setQuery("");
    // clear the input after clicking the input cancel button
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }, []);

  return (
    <Box>
      <Box
        css={{
          mb: 30,
          position: "sticky",
          top: 70,
          py: 30,
          backgroundColor: "$white",

          "@bp2": {
            top: 40,
          },
        }}
      >
        <SearchInput
          ref={inputRef}
          onChange={handleInputChange}
          value={query}
          onClear={clearQuery}
        />
        {/* Improve aesthetics for loading state */}
        {loading && <Text>Loading...</Text>}
      </Box>
      <SearchResults results={results} />
      <Box ref={lastItemRef} css={{ height: 1 }} />
    </Box>
  );
};
