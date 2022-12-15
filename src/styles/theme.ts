import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f7f4dd",
      100: "#f7f4dd",
      200: "#f7f4dd",
      300: "#f7f4dd",
      400: "#f7d0dc",
      500: "#f7abbf",
      600: "#f48ba1",
      700: "#f16b82",
      800: "#e04b65",
      900: "#bc264a",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#f7f4dd",
      },
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Button: {
      variants: {
        brand: {
          transition: "all 0.2s",
          bg: "brand.500",
          color: "blackAlpha.700",
          shadow: "#f7d0dc",
          borderWidth: "1px",
          borderColor: "blackAlpha.100",
          _hover: {
            shadow: "md",
          },
        },
      },
    },
    Link: {
      variants: {
        brand: {
          transition: "all 0.2s",
          bg: "brand.500",
          color: "blackAlpha.700",
          shadow: "#f7d0dc",
          borderWidth: "1px",
          borderColor: "blackAlpha.100",
          _hover: {
            shadow: "md",
          },
        },
      },
    },
  },
});

export default theme;
