import { VFC } from "react";
import { Box } from "./Box";
import { Text } from "./Text";

type UserCardProps = {
  avatar: string;
  description: string;
  name: string;
};

export const UserCard: VFC<UserCardProps> = ({ avatar, description, name }) => {
  return (
    <Box
      css={{
        display: "flex",
      }}
    >
      <Box as="img" />
      <Box>Text</Box>
    </Box>
  );
};
