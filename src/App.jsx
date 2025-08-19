import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Bienestar from "./pages/Bienestar.jsx";
import Crianza from "./pages/Crianza.jsx";
import Home from "./pages/Home.jsx";
import Perinatal from "./pages/Perinatal.jsx";
import React from "react";
import page404 from "./pages/404.jsx";

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
