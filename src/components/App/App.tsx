import * as React from "react";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ContentSortIcon from 'material-ui/svg-icons/content/sort';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Hello from "../Hello/Hello.tsx";
import injectTapEventPlugin = require("react-tap-event-plugin");
import {cyan500, cyan700, cyan900, lightBlue500, lightBlue700, lightBlue900} from "material-ui/styles/colors";

const muiTheme = getMuiTheme(darkBaseTheme, {
    palette: {
            primary1Color: cyan500,
            primary2Color: cyan700,
            primary3Color: cyan900,
            accent1Color: lightBlue500,
            accent2Color: lightBlue700,
            accent3Color: lightBlue900
}});

// palette: {
//     primary1Color: _colors.cyan700,
//         primary2Color: _colors.cyan700,
//         primary3Color: _colors.grey600,
//         accent1Color: _colors.pinkA200,
//         accent2Color: _colors.pinkA400,
//         accent3Color: _colors.pinkA100,
//         textColor: _colors.fullWhite,
//         alternateTextColor: '#303030',
//         canvasColor: '#303030',
//         borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
//         disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
//         pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
//         clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
// }


// palette: {
//     primary1Color: _colors.cyan500,
//         primary2Color: _colors.cyan700,
//         primary3Color: _colors.grey400,
//         accent1Color: _colors.pinkA200,
//         accent2Color: _colors.grey100,
//         accent3Color: _colors.grey500,
//         textColor: _colors.darkBlack,
//         alternateTextColor: _colors.white,
//         canvasColor: _colors.white,
//         borderColor: _colors.grey300,
//         disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
//         pickerHeaderColor: _colors.cyan500,
//         clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
//         shadowColor: _colors.fullBlack
// }




export default class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
        this.state = {
            value: 2
        };
    };


    public render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Toolbar>
                        <ToolbarGroup firstChild={true}>
                            <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
                                <MenuItem value={1} primaryText="All Broadcasts"/>
                                <MenuItem value={2} primaryText="All Voice"/>
                                <MenuItem value={3} primaryText="All Text"/>
                                <MenuItem value={4} primaryText="Complete Voice"/>
                                <MenuItem value={5} primaryText="Complete Text"/>
                                <MenuItem value={6} primaryText="Active Voice"/>
                                <MenuItem value={7} primaryText="Active Text"/>
                            </DropDownMenu>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <ToolbarTitle text="Options"/>
                            <ContentSortIcon />
                            <ToolbarSeparator />
                            <RaisedButton label="Create Broadcast" primary={true}/>
                            <IconMenu
                                iconButtonElement={
                                  <IconButton touch={true}>
                                    <NavigationExpandMoreIcon />
                                  </IconButton>
                                }
                            >
                                <MenuItem primaryText="Download"/>
                                <MenuItem primaryText="More Info"/>
                            </IconMenu>
                        </ToolbarGroup>
                    </Toolbar>
                    <div>
                        {this.props.children || <Hello />}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }

    handleChange(event, index, value) {
        this.setState({value: value});
    }
}

interface AppState {
    value?: Number;
}