import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassEnd, faHourglassStart} from  "@fortawesome/free-solid-svg-icons";


export default class StartStopControler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            icon: faHourglassEnd
        }
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        if(this.state.icon === faHourglassEnd){
            this.setState({icon: faHourglassStart})
        } else {
            this.setState({icon: faHourglassEnd})
        }
    }
    render(){
        return (
            <span onClick={this.handleClick}>
            <button id="start_stop"
                    className="start-stop control-btn"
                    onClick={this.props.onClick}>
                <FontAwesomeIcon icon={this.state.icon} className="icon"/>
            </button>
            </span>
        )
    }
}