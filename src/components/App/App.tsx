import * as React from "react";
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Hello from "../Hello/Hello.tsx";

const muiTheme = getMuiTheme(darkBaseTheme);

export default class App extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="Blank" iconClassNameRight=""/>
                    <div>
                        {this.props.children || <Hello />}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}