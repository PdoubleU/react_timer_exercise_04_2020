import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from  "@fortawesome/free-solid-svg-icons";

export default class LengthControler extends React.Component{
    render(){
        return (
            <div className="length-control">
                <div id={this.props.idTitle}
                    className="control-title">{this.props.title}</div>
                <span className="control-container">
                    <button id={this.props.decrementId}
                        className="control-btn"
                        value='-'
                        onClick={this.props.onClick}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} className="icon" />
                    </button>
                    <div id={this.props.idLength} style={{margin: '0'}}>{this.props.length}</div>
                    <button id={this.props.incrementId}
                            className="control-btn"
                            value='+'
                            style={{margin: '0'}}
                            onClick={this.props.onClick}>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon"/>
                    </button>
                </span>
            </div>
        )
    }
}