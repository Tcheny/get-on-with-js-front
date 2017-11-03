import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TweenLite } from 'gsap';

class Playground extends Component {
  state = {
    bluemargin : 0,
  }

  componentDidMount() {
    let bleu = ReactDOM.findDOMNode(this.refs.bleu);
    let tween = TweenLite.to(bleu, 2, {width: "100px", height:"100px"})
    bleu.addEventListener('click', () => tween.reverse(1));
  }
  render() {
    return (
      <div className="playground">
        <div className="square blue" ref="bleu"></div>
        <div className="square red"></div>
        <div className="square green"></div>
      </div>
    );
  }

}

export default Playground;
