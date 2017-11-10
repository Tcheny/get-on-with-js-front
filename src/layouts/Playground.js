import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TweenLite } from 'gsap';

import Intro from './Intro';
import Terminal from './Terminal';
import HtmlCss from "./HtmlCss";
import ResourcesDocs from "./ResourcesDocs";
import ResourcesVideos from "./ResourcesVideos";
import Tips from "./Tips";
import Practices from './Practices';

class Playground extends Component {
  state = {
    bluemargin : 0,
  }
  componentDidMount() {
    let bleu = ReactDOM.findDOMNode(this.refs.bleu);
    let tween = TweenLite.from(bleu, 2, {marginLeft: "-500%"})
    tween.pause();
    let animation = (e) => {
      if (document.documentElement.scrollTop > bleu.offsetTop - (document.documentElement.clientHeight / 3 * 2)) {
        tween.play()
      }
    }
    window.addEventListener('scroll', () => animation());
  }
  render() {
    return <div className="playground">
        <div ref="bleu">
          <Intro />
        </div>
        <Terminal />
        <HtmlCss />
        <ResourcesDocs />
        <ResourcesVideos />
        <Tips />
        <Practices />
      </div>;
  }
}

export default Playground;
