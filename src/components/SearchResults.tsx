import { Box } from "./Box";
import { VFC } from "react";
import { UserCard } from "./UserCard";

type SearchResultsProps = {};

export const SearchResults: VFC<SearchResultsProps> = () => {
  return (
    <Box>
      {[1, 2, 23, 34, 45, 48, 5].map((id) => (
        <UserCard
          key={id}
          name="Francois Wigget"
          avatar="https://robohash.org/enimidodit.png?size=200x200&set=set1"
          description="Unspecified focal traumatic brain injury without loss of consciousness"
        />
      ))}
    </Box>
  );
};
