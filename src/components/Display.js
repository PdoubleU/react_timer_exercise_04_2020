import React from 'react';

export default class Display extends React.Component{
    render(){
        return (
        <div className="display" >
            <div id="timer-label" value={this.props.name}>{this.props.name}</div>
            <div id="time-left"
                 value={this.props.value}
                 style={this.props.style}>
                     {this.props.value}
            </div>
        </div>
        )
    }
}