import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TweenLite } from 'gsap';

class Playground extends Component {
  state = {
    bluemargin : 0,
  }
  componentDidMount() {
    let bleu = ReactDOM.findDOMNode(this.refs.bleu);
    let tween = TweenLite.from(bleu, 2, {marginLeft: "-300%"})
    tween.pause();
    let animation = (e) => {
      if (document.documentElement.scrollTop > bleu.offsetTop - (document.documentElement.clientHeight / 3 * 2)) {
        tween.play()
      }
    }
    window.addEventListener('scroll', () => animation());
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
