import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

const SCREEN_SIZES = {
  sm: 375,
  md: 768,
  lg: 1040,
  xl: 1920,
};

export const media = {
  bp1: `(min-width: ${SCREEN_SIZES.md}px)`,
  bp2: `(min-width: ${SCREEN_SIZES.lg}px)`,
  bp3: `(min-width: ${SCREEN_SIZES.xl}px)`,
};

// media: {
//   xs: "(min-width: 0px)",
//   sm: "(min-width: 600px)",
//   md: "(min-width: 900px)",
//   lg: "(min-width: 1200px)",
// }

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media,
  theme: {
    fonts: {
      display: "Georgia, serif",
      copy: "Helvetica, serif",
    },
    fontWeights: {
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
      black: "rgba(19, 19, 21, 1)",
      white: "rgba(255, 255, 255, 1)",
      teal: "#33DBDB",
      blue: "#1B3889", //@todo think of a better name
      darkBlue: "#112467",

      pigeon200: "#EFEFEF",
      pigeon300: "#C4C4C4",
      pigeon400: "#808080",
      pigeon500: "#666666",
      pigeon700: "#333333",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
      3: "17px",
    },
  },
  utils: {
    mt: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginTop: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginBottom: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      marginTop: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      marginRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      marginBottom: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export type { VariantProps } from "@stitches/react";
