import React from 'react';
import './App.min.css';
import LengthControler from './components/TimerLengthControl';
import StartStopControler from './components/StartStop';
import ResetButton from './components/ResetBtn';
import Display from './components/Display';
import initialState from './components/initialState';

class PomodoroClock extends React.Component {
  constructor(props){
    super(props);
      this.state = initialState;
  this.setBreak = this.setBreak.bind(this);
  this.setSession = this.setSession.bind(this);
  this.stopStart = this.stopStart.bind(this);
  this.resetState = this.resetState.bind(this);
  this.decrementTimer = this.decrementTimer.bind(this);
  this.phaseControl = this.phaseControl.bind(this);
  this.countDown = this.countDown.bind(this);
  this.warningColors = this.warningColors.bind(this);
  this.switchTimer = this.switchTimer.bind(this);
  this.alarm = this.alarm.bind(this);
  this.clockify = this.clockify.bind(this);
  }
  setBreak(e){
    this.lengthModifier('brkLength', e.currentTarget.value,
    this.state.brkLength, 'Break');
  }
  setSession(e){
    this.lengthModifier('sesLength', e.currentTarget.value,
    this.state.sesLength, 'Session')
  }
  resetState(){
    clearInterval(this.state.intervalID);
    this.audio.pause();
    this.audio.currentTime = 0;
    this.setState(initialState);
  }
  stopStart(){
    // eslint-disable-next-line no-unused-expressions
    this.state.timerState === 'stopped' ?
    (this.setState({timerState: 'running'}), this.countDown()
    ) : (clearInterval(this.state.intervalID),
    this.setState({timer: this.state.timer, timerState: 'stopped'}))

  }
  countDown() {
    this.setState({
      intervalID: setInterval(() => {
        this.decrementTimer();
        this.phaseControl();
       }, 1000)
    })
  }
  decrementTimer(){
    this.setState({timer: this.state.timer - 1})
  }
  phaseControl() {
    this.warningColors(this.state.timer);
    if (this.state.timer === 0) this.alarm();
    if (this.state.timer < 0) {
      // eslint-disable-next-line no-unused-expressions
      this.state.timerType === 'Session' ? (
        clearInterval(this.state.intervalID),
        this.switchTimer(this.state.brkLength * 60, 'Break'),
        this.countDown()
      ) : (
        clearInterval(this.state.intervalID),
        this.switchTimer(this.state.sesLength * 60, 'Session'),
        this.countDown()
      );
    }
  }
  switchTimer(timeLength, timerType){
    this.setState({timer: timeLength, timerType: timerType})
  }
  warningColors(timer){
    timer < 61 ? this.setState({alarmColor: {color: '#a50d0d'}}) :
    this.setState({alarmColor: {color: 'white'}});
  }
  alarm() {
    this.audio.play();
  }
  lengthModifier(stateToModify, operator, currentLength, timerType){
    if(this.state.timerState === 'running') return;
    else if (this.state.timerType !== timerType) {
      if(operator === '+' && currentLength < 60 ) {
        this.setState({[stateToModify]: currentLength + 1})
      }
      else if (operator === '-' && currentLength > 1 ) {
        this.setState({[stateToModify]: currentLength - 1})
      }
    } else {
      if(operator === '+' && currentLength < 60 ) {
        this.setState({[stateToModify]: currentLength + 1,
        timer: currentLength * 60 + 60})
      }
      else if (operator === '-' && currentLength > 1 ) {
        this.setState({[stateToModify]: currentLength - 1,
          timer: currentLength * 60 - 60})
      }
    }
  }
  clockify() {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }

  render(){
    return (
      <div className="timer">
        <LengthControler  idTitle='break-label'
                          idLength='break-length'
                          decrementId='break-decrement'
                          incrementId='break-increment'
                          title='Break Length'
                          length={this.state.brkLength}
                          onClick={this.setBreak}/>
        <LengthControler  idTitle= 'session-label'
                          idLength='session-length'
                          decrementId='session-decrement'
                          incrementId='session-increment'
                          title='Session Length'
                          length={this.state.sesLength}
                          onClick={this.setSession}/>
        <div className="control-buttons">
        <StartStopControler onClick={this.stopStart}/>
        <ResetButton onClick={this.resetState}/>
        </div>
        <Display  name={this.state.timerType}
                  value={this.clockify()}
                  style={this.state.alarmColor}/>
        <audio id="beep" preload="auto"
          src="https://www.mboxdrive.com/bell.mp3"
          ref={(audio) => { this.audio = audio; }} />
      </div>

    );
  }
}

export default PomodoroClock;
