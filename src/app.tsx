import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, Redirect, browserHistory} from 'react-router';
import App from "./components/App/App.tsx";
import Hello from "./components/Hello/Hello.tsx";
import World from "./components/World/World.tsx";
import Topology from "./components/Topology/Topology.tsx";

// Use browser history api, don't forget rewrite rules in production (or change it to hashHistory)
ReactDOM.render((<Router history={browserHistory}>
        <Route path="/app" component={App}>
            <Route path="world" component={World}/>
            <Route path="topology" component={Topology}/>
            <Route path="*" component={Hello}/>
        </Route>
        <Redirect from="*" to="/app"/>
    </Router>)
    , document.querySelector('.app-container'));