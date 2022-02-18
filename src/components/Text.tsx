import { ComponentProps } from "react";
import { CSS, styled, VariantProps } from "../stitches.config";

export type TextVariants = VariantProps<typeof Text>;

export type TextProps = ComponentProps<typeof Text> &
  TextVariants & {
    css?: CSS;
  };

export const Text = styled("p", {
  fontFamily: "$copy",
  color: "$pigeon500",
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  
  variants: {
    variant: {
      heading1: {
        fontFamily: "$display",
        fontWeight: "$regular",
        fontSize: 40,
        lineHeight: "110%",
      },
      body: {
        fontFamily: "$copy",
        fontSize: 16,
        lineHeight: "150%",
      },
      input: {
        fontFamily: "$copy",
        fontSize: 14,
        lineHeight: "150%",
        letterSpacing: "-0.0015em",
      },
      smallCopy: {
        fontFamily: "$copy",
        fontSize: 14,
        fontWeight: "$regular",
        lineHeight: "150%",
        letterSpacing: "-0.0015em",
      },
    },
  },
  defaultVariants: {
    variant: "body",
  },
});
