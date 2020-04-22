import React from 'react';
import './App.min.css';
import LengthControler from './components/TimerLengthControl';
import initialState from './components/InitialState';

class PomodoroClock extends React.Component {
  constructor(props){
    super(props);
      this.state = initialState;

  this.setBreak = this.setBreak.bind(this);
  this.setSession = this.setSession.bind(this);
  }
  setBreak(e){
    this.lengthModifier('brkLength', e.currentTarget.value,
    this.state.brkLength, 'Break')
  }
  setSession(e){
    this.lengthModifier('sesLength', e.currentTarget.value,
    this.state.sesLength, 'Session')
  }
  lengthModifier(stateToModify, operator, currentLength, timerType){
    if(operator === '+' && currentLength < 60 ) {
      this.setState({[stateToModify]: currentLength + 1})
    }
    else if (operator === '-' && currentLength > 1 ) {
      this.setState({[stateToModify]: currentLength - 1})
    }
  }
  render(){
    return (
      <div className="timer">
        <LengthControler  idTitle='break-length'
                          decrementId='break-decrement'
                          incrementId='break-increment'
                          title='Break Length'
                          length={this.state.brkLength}
                          onClick={this.setBreak}/>
        <LengthControler  idTitle= 'session-length'
                          decrementId='session-decrement'
                          incrementId='session-increment'
                          title='Session Length'
                          length={this.state.sesLength}
                          onClick={this.setSession}/>
      </div>
    );
  }
}

export default PomodoroClock;
