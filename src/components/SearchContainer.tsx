import { Box } from "./Box";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export const SearchContainer = () => {
  return (
    <Box>
      <Box
        css={{
          mb: 50,
        }}
      >
        <SearchInput />
      </Box>
      <SearchResults />
    </Box>
  );
};
