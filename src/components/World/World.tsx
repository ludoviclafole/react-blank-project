import * as React from "react";
import {Link} from "react-router";

export default class World extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>World</h1>
                <Link to="/app/hello">To Hello</Link>
                <br />
                <Link to="/app/topology">To Topo</Link>
            </div>)
    }
}