import React from "react";
//component imports
import Intro from "./components/Intro/Intro";
import Nav from "./components/Nav/Nav";
//css imports
import "./App.css";
//redux imports
import { Provider } from "react-redux";
import store from "./redux/store";
//routing imports
import { HashRouter } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          {/* <Nav /> */}
          {routes}
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
