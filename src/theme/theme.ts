import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  useSystemTheme: true,
  fonts: {
    heading: `Poppins, ${base.fonts.heading}`,
    body: `Inter, ${base.fonts.body}`,
  },
});

export default theme;
