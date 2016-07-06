import * as React from "react";
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Hello from "../Hello/Hello.tsx";
import injectTapEventPlugin = require("react-tap-event-plugin");

const muiTheme = getMuiTheme(darkBaseTheme);

export default class App extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    };


    public render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="OpenBach"
                            iconElementRight={
                              <IconMenu
                                  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                >
                                  <MenuItem primaryText="Refresh" />
                                  <MenuItem primaryText="Send feedback" />
                                  <MenuItem primaryText="Settings" />
                                  <MenuItem primaryText="Help" />
                                  <MenuItem primaryText="Sign out" />
                                </IconMenu>
                            }
                    />
                    <div>
                        {this.props.children || <Hello />}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}