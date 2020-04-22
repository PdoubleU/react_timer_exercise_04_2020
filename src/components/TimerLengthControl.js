import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from  "@fortawesome/free-solid-svg-icons";

export default class LengthControler extends React.Component{
    render(){
        return (
            <div className="length-control">
                <div id={this.props.idTitle}>{this.props.title}</div>
                <button id={this.props.decrementId}
                    className="control-btn"
                    value='-'
                    onClick={this.props.onClick}>
                </button><FontAwesomeIcon icon={faArrowAltCircleLeft} className="icon"/>
                <div id={this.props.idLength}>{this.props.length}</div>
                <button id={this.props.incrementId}
                        className="control-btn"
                        value='+'
                        onClick={this.props.onClick}>
                </button><FontAwesomeIcon icon={faArrowAltCircleRight} className="icon"/>
            </div>
        )
    }
}