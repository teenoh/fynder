import { FC, VFC } from "react";
import { Box } from "./Box";
import { CSS } from "../stitches.config";

type IconProps = {
  css?: CSS;
};

// @todo fix typing

export const SearchIcon: VFC<IconProps> = (props) => {
  return (
    <Box
      as="svg"
      width="12"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 12 12"
      {...props}
    >
      <path
        d="M7.59677 7.43224L10.5 10.5M5.04527 1.5C3.08042 1.5 1.5 3.08042 1.5 5.00256C1.5 6.92469 3.08042 8.50512 5.04527 8.50512C7.01012 8.50512 8.59054 6.92469 8.59054 5.00256C8.59054 3.08042 7.01012 1.5 5.04527 1.5Z"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
  );
};
