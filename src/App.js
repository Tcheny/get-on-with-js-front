import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Homepage from "./layouts/Homepage.js";
import Playground from './layouts/Playground.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Homepage ref="homepage"/> */}
        <Playground />
      </div>
    );
  }
}

export default App;
