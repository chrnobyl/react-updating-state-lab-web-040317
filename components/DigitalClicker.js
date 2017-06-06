import React from 'react';

class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  addClick() {
  this.setState(function(prev) {
    timesClicked: ++prev.timesClicked
  })
}

  render(){
    return(
      <button value={this.state.timesClicked} onClick = {this.addClick.bind(this)}>{this.state.timesClicked}</button>

    )
  }
}

export default DigitalClicker;
