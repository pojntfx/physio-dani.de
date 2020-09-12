import { NoSsr } from "@material-ui/core";
import {
  createMuiTheme,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import "fontsource-roboto";
import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
}
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#A11A3D",
    },
    secondary: {
      main: "#333333",
    },
  },
});

const App = ({ Component, pageProps }): React.ReactElement<AppProps> => {
  return (
    <NoSsr>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <GlobalStyle />
            <Component {...pageProps} />
          </StylesProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </NoSsr>
  );
};

export default App;
