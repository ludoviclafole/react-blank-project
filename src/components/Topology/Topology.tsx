import * as React from "react";
var ReactFauxDOM = require('react-faux-dom');
import * as D3 from 'd3';

export default class Topology extends React.Component<{}, TopologyState> {
    constructor(props) {
        super(props);
        this.state = {
            mouseOver: false
        };
    }


    public render() {

        var selector = ReactFauxDOM.createElement('svg');
        var svg = D3.select(selector)
            .attr({
                width: 300,
                height: 300
            });

        svg
            .append('rect')
            .attr({
                width: 300,
                height: 300,
                fill: this.state.mouseOver ? 'red' : 'green'
            })
            .on('mouseover', function () {
                this.setState({mouseOver: true});
            }.bind(this))
            .on('mouseout', function () {
                this.setState({mouseOver: false});
            }.bind(this));

        return selector.toReact();
    }

    changeState(value) {
        this.setState({mouseOver: value});
    }
}





interface TopologyState {
    mouseOver?:boolean;
}