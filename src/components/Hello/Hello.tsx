import * as React from "react";
import {Link} from "react-router";

/* Return a map of class => new hashed class, https://github.com/webpack/css-loader */
const style = require('./Hello.scss');

export default class Hello extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (<div className={style.hello}>
            <h1>Hello</h1>
            <Link to="/app/world" className={style.link}>To World</Link>
        </div>)
    }
}