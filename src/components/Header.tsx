import { Box } from "./Box";

export const Header = ({}) => {
  return (
    <Box
      as="header"
      css={{
        mb: 27,
      }}
    >
      <Box
        css={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          backgroundColor: "$teal",
        }}
      />
      <Box
        css={{
          maxWidth: 1054,
          mx: "auto",
          py: 33,
        }}
      >
        <Box as="a">
          <Box
            as="img"
            src="/logo.svg"
            alt="Air logo"
            css={{
              height: 24,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
