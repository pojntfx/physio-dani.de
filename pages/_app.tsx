import { CssBaseline, NoSsr, useMediaQuery } from "@material-ui/core";
import {
  createMuiTheme,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import "fontsource-open-sans";
import "fontsource-permanent-marker";
import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useMemo } from "react";

const GlobalStyle = createGlobalStyle`

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
          },
          h2: {
            fontFamily:
              "Permanent Marker, Open Sans, Roboto, Helvetica, Arial, sans-serif",
            textTransform: "uppercase",
            color: "#A11A3D",
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
