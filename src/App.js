import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import page404 from "./pages/404";
import Perinatal from "./pages/Perinatal";
import Crianza from "./pages/Crianza";
import Bienestar from "./pages/Bienestar";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/"}`}
          component={Home}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/perinatal"}`}
          component={Perinatal}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/crianza"}`}
          component={Crianza}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/bienestar"}`}
          component={Bienestar}
        />
        <Route exact component={page404} />
      </Switch>
    </Router>
  );
}

export default App;
