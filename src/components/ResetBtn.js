import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRedoAlt } from  "@fortawesome/free-solid-svg-icons";

export default class ResetButton extends React.Component{
    render(){
        return (
            <button id="reset"
                    className="reset control-btn"
                    onClick={this.props.onClick}>
                <FontAwesomeIcon icon={faRedoAlt} className="icon"/>
            </button>
        )
    }
}