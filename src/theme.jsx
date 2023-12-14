import { createTheme } from "@mui/material";

const theme = createTheme({
  // ...
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          body: {
            backgroundImage: "url('/public/pexels-michael-block-3225517.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          },
        },
      },
    },
  },
});
export default theme;