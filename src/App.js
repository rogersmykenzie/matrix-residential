import React from "react";
//css imports
import "./App.css";
//redux imports
import { Provider } from "react-redux";
import store from "./redux/store";
//routing imports
import { HashRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import routes from "./routes";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#309ea6"
    }
  },
  typography: {
    useNextVariants: true
  }
});

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div className="App">{routes}</div>
        </MuiThemeProvider>
      </Provider>
    </HashRouter>
  );
}

export default App;
