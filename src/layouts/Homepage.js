import React, { Component } from 'react';

class Homepage extends Component {

  render() {
    return (
      <div className="Homepage">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-1 col-md-3">
                <h1 className="title">GET ON WITH</h1>
                <h1 className="js-logo">JS</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <button className="btn btn-custom">start the tour</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Homepage;
