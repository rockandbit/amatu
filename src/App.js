import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import page404 from './pages/404';
import Perinatal from './pages/Perinatal';
import Crianza from './pages/Crianza';
import Bienestar from './pages/Bienestar';
import Contacts from './pages/Contacts';

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/" }` }
                    component={ Home }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/perinatal" }` }
                    component={ Perinatal }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/crianza" }` }
                    component={ Crianza }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/bienestar" }` }
                    component={ Bienestar }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/contacts" }` }
                    component={ Contacts }
                />
                {/* <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/journal-single-post" }` }
                    component={ JournalSinglePost }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/search-results" }` }
                    component={ SearchResults }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works" }` }
                    component={ Works }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/ui" }` }
                    component={ UserInterface }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works-inside" }` }
                    component={ WorksInside }
                /> */}
                <Route exact component={ page404 }/>
            </Switch>
        </Router>
    );
}

export default App;
