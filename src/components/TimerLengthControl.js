import React from 'react';

export default class LengthControler extends React.Component{
    render(){
        return (
            <div className="length-control">
                <div id={this.props.idTitle}>{this.props.title}</div>
                <button id={this.props.decrementId}
                    className="control-btn"
                    value='-'
                    onClick={this.props.onClick}>Down
                </button>
                <div id={this.props.idLength}>{this.props.length}</div>
                <button id={this.props.incrementId}
                        className="control-btn"
                        value='+'
                        onClick={this.props.onClick}>Up
                </button>
            </div>
        )
    }
}