import { Box } from "./Box";
import { Text } from "./Text";
import { VFC } from "react";
import { UserCard } from "./UserCard";
import { Person } from "../types";

type SearchResultsProps = {
  results: Person[];
};

export const SearchResults: VFC<SearchResultsProps> = ({ results }) => {
  return (
    <Box>
      {results.length == 0 && <Text>No results found</Text>}
      {results.map(({ id, name, avatar, description }) => (
        <UserCard
          key={id}
          name={name}
          avatar={avatar}
          description={description}
        />
      ))}
    </Box>
  );
};
