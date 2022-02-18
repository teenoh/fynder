import { VFC } from "react";
import { Box } from "./Box";
import { SearchIcon } from "./Icons";
import { InputHTMLAttributes } from "react";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  onClear: () => void;
};

export const SearchInput: VFC<SearchInputProps> = ({
  value,
  onClear,
  ...inputProps
}) => {
  return (
    <Box
      as="div"
      css={{
        position: "relative",
        borderRadius: 4,
        display: "flex",
        backgroundColor: "rgba(239,239,239, 0.6)", // think of how to use opacify with stitches
        height: 40,

        "&:focus-within": {
          outline: `3px solid #6983DC`,
          outlineOffset: 3,
        },
      }}
    >
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          mr: 4,
          ml: 16,
        }}
      >
        <SearchIcon
          css={{
            color: "$pigeon500",
          }}
        />
      </Box>
      <Box
        as="input"
        css={{
          flex: 1,
          width: "100%",
          py: 16,
          paddingRight: "24px",
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
          fontSize: 14, //@todo move to design system,
          lineHeight: "150%",
          letterSpacing: "-0.0015em",
          color: "$pigeon700",
        }}
        placeholder="Search in Air HQ"
        {...inputProps}
      />

      <Box
        as="button"
        type="button"
        aria-label="clear"
        onClick={onClear}
        css={{
          outline: "none",
          border: "none",
          position: "absolute",
          backgroundColor: "transparent",
          right: 0,
          px: 16,
          top: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          fontSize: "inherit",

          ...(!value && {
            pointerEvents: "none",
            visibility: "hidden",
          }),
        }}
      >
        &times;
      </Box>
    </Box>
  );
};
