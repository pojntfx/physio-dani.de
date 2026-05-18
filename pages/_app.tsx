import { CssBaseline, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "fontsource-lato/index.css";
import { AppProps } from "next/app";
import { useMemo } from "react";
import {
  createGlobalStyle,
  ThemeProvider as ScThemeProvider,
} from "styled-components";
import "yet-another-react-lightbox/styles.css";

const GlobalStyle = createGlobalStyle`
body {
  background-image: url("/background.jpg");
  background-position: 50%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  #__next {
      min-height: 100vh;
      background: ${({ theme }: any) => theme.palette.background.paper}d0;
  }
}
`;

const App = ({ Component, pageProps }): React.ReactElement<AppProps> => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#A11A3D",
          },
          secondary: {
            main: "#333333",
          },
          background: prefersDarkMode ? {} : { paper: "#ffffff" },
        },
        typography: {
          fontFamily: "Lato, Roboto, Helvetica, Arial, sans-serif",
          h1: {
            fontStyle: "normal",
            textTransform: "uppercase",
            fontSize: "3rem",
            fontWeight: 900,
            letterSpacing: "0.05rem",
          },
          h2: {
            fontStyle: "normal",
            textTransform: "uppercase",
            color: prefersDarkMode ? "#ffffff" : "#A11A3D",
            fontSize: "2rem",
            fontWeight: 900,
            letterSpacing: "0.05rem",
          },
          h3: {
            fontStyle: "normal",
            textTransform: "uppercase",
            fontSize: "1.5rem",
            fontWeight: 900,
            letterSpacing: "0.05rem",
          },
          body1: {
            fontStyle: "normal",
          },
          h6: {
            fontStyle: "normal",
          },
          body2: {
            fontStyle: "italic",
          },
          button: {
            fontStyle: "normal",
            textTransform: "uppercase",
            fontWeight: 700,
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <ScThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Component {...pageProps} />
      </ScThemeProvider>
    </ThemeProvider>
  );
};

export default App;
