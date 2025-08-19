import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Bienestar from "./pages/Bienestar";
import Crianza from "./pages/Crianza";
import Home from "./pages/Home";
import Perinatal from "./pages/Perinatal";
import React from "react";
import page404 from "./pages/404";

function App() {
  return (
    <Router basename={"/"}>
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route exact path={`/perinatal`} component={Perinatal} />
        <Route exact path={`/crianza`} component={Crianza} />
        <Route exact path={`/bienestar`} component={Bienestar} />
        <Route exact component={page404} />
      </Switch>
    </Router>
  );
}

export default App;
