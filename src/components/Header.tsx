import { Box } from "./Box";

export const Header = () => {
  return (
    <Box
      as="header"
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "$white",
      }}
    >
      <Box
        css={{
          height: 4,
          backgroundColor: "$teal",
        }}
      />
      <Box
        css={{
          maxWidth: 1054,
          padding: "33px 24px",
          mx: "auto",
        }}
      >
        <Box as="a" href="https://air.inc">
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
