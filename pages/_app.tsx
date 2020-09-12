import { CssBaseline, NoSsr, useMediaQuery } from "@material-ui/core";
import {
  createMuiTheme,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import "fontsource-open-sans";
import "fontsource-permanent-marker";
import { AppProps } from "next/app";
import { useMemo } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

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
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#A11A3D",
          },
          secondary: {
            main: "#333333",
          },
        },
        typography: {
          fontFamily: "Open Sans, Roboto, Helvetica, Arial, sans-serif",
          h1: {
            fontFamily:
              "Permanent Marker, Open Sans, Roboto, Helvetica, Arial, sans-serif",
            textTransform: "uppercase",
            fontSize: "3.5rem",
          },
          h2: {
            fontFamily:
              "Permanent Marker, Open Sans, Roboto, Helvetica, Arial, sans-serif",
            textTransform: "uppercase",
            color: "#A11A3D",
            fontSize: "2.5rem",
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <NoSsr>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <CssBaseline />
            <GlobalStyle />
            <Component {...pageProps} />
          </StylesProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </NoSsr>
  );
};

export default App;
