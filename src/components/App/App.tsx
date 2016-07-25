import * as React from 'react';
import * as ReactMDL from 'react-mdl';
import injectTapEventPlugin = require('react-tap-event-plugin');
import Hello from '../Hello/Hello.tsx';


const style = require('./App.scss');

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
            <ReactMDL.Layout>
                <ReactMDL.Header className="mdl-color--grey-100 mdl-color-text--grey-600">
                    <ReactMDL.HeaderRow title="Title">
                        <ReactMDL.Spacer/>
                        <ReactMDL.Textfield
                            onChange={() => {}}
                            label="Enter your query..."
                            expandable
                            expandableIcon="search"
                        />
                        <ReactMDL.Button raised colored id="login-menu">
                            Toto
                        </ReactMDL.Button>
                        <ReactMDL.Menu target="login-menu">
                            <ReactMDL.MenuItem>Settings</ReactMDL.MenuItem>
                            <ReactMDL.MenuItem>Logout</ReactMDL.MenuItem>
                        </ReactMDL.Menu>
                    </ReactMDL.HeaderRow>
                </ReactMDL.Header>
                <ReactMDL.Drawer title="Menu">
                    <ReactMDL.Navigation>
                        <a href="">Manage</a>
                        <a href="">Handle</a>
                    </ReactMDL.Navigation>
                </ReactMDL.Drawer>
                <ReactMDL.Content className="mdl-color--grey-100">
                    <ReactMDL.Grid>
                        <ReactMDL.Cell shadow={1} col={8}>
                            {this.props.children || <Hello />}
                        </ReactMDL.Cell>
                        <ReactMDL.Cell shadow={1} col={4} tablet={4} desktop={4}>
                            <ReactMDL.Card style={{width: '100%'}}>
                                <ReactMDL.CardTitle expand className={style.servercard + " mdl-color--teal-300"}>Machine</ReactMDL.CardTitle>
                                <ReactMDL.CardText className="mdl-color-text--grey-600">
                                    <ul>
                                        <li>IP: <b id="machine_ip">192.168.0.1</b></li>
                                        <li>OS: <b id="machine_os">Ubuntu 14.04</b></li>
                                        <li>Installed applications:
                                            <ul id="machine_installed_jobs">
                                            </ul>
                                        </li>
                                    </ul>
                                </ReactMDL.CardText>
                                <ReactMDL.CardActions border>
                                    <ReactMDL.Button>More</ReactMDL.Button>
                                </ReactMDL.CardActions>
                            </ReactMDL.Card>
                        </ReactMDL.Cell>
                    </ReactMDL.Grid>
                </ReactMDL.Content>
            </ReactMDL.Layout>
        )
    }

}

interface AppState {
    value?:Number;
}