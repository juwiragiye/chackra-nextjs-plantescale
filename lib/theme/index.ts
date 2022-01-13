import { extendTheme, theme as base } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `Poppins, ${base.fonts.heading}`,
    body: `Inter, ${base.fonts.body}`,
  },
});
