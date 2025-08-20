import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Bienestar from "./pages/Bienestar.jsx";
import Crianza from "./pages/Crianza.jsx";
import Home from "./pages/Home.jsx";
import Page404 from "./pages/404.jsx";
import Perinatal from "./pages/Perinatal.jsx";
import React from "react";
import { routes } from "./routes";

function App() {
  return (
    <Router basename={"/"}>
      <Switch>
        {routes.map((r) => (
          <Route
            exact
            key={r.path}
            path={r.path}
            component={
              r.component === "Home"
                ? Home
                : r.component === "Perinatal"
                ? Perinatal
                : r.component === "Crianza"
                ? Crianza
                : r.component === "Bienestar"
                ? Bienestar
                : null
            }
          />
        ))}
        <Route path="*" component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
