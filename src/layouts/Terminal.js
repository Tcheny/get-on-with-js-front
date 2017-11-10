import React, { Component } from "react";
import terminal from '../assets/terminal.png';

class Terminal extends Component {
  render() {
    return (
      <div className="square white terminal">
        <h2>Terminal</h2>
        <img src={terminal} alt="terminal"/>
      </div>
    );
  }
}

export default Terminal;
