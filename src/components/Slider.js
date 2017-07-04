import React, {Component}from 'react';
import SliderItems from './SliderItems'
import SliderArrow from './SliderArrow'
import SliderDots from './SliderDots'
export default class Home extends Component {
  constructor() {
    super();
    this.state = {index: 0}
  }

  turn = (step) => {
    let index = this.state.index + step;
    if (index < 0) {
      this.$slider.style.transitionDuration = '0s';
      this.$slider.style.left = -400*this.props.items.length+'px';
      setTimeout(() => {
        index = this.props.items.length - 1;
        this.$slider.style.transitionDuration = this.props.speed + 's';
        this.setState({index})
      }, 0);
    }
    if (index > this.props.items.length) {
      this.$slider.style.transitionDuration = '0s';
      this.$slider.style.left = 0;
      setTimeout(() => {
        index = 1;
        this.$slider.style.transitionDuration = this.props.speed + 's';
        this.setState({index})
      }, 0);
      return;
    }
    this.setState({index})
  };
  go = () => {
    this.$timer = (setInterval(() => {
      this.turn(1)
    }, this.props.delay * 1000))
  };

  componentDidMount() {
    this.$slider=document.querySelector('.slider');
    if (this.props.autoplay) {
      this.go()
    }
  }

  render() {
    return (
      <div className="slider-wrapper" onMouseOver={()=>clearInterval(this.$timer)} onMouseOut={()=>this.go()}>
        <SliderItems
          items={this.props.items}
          index={this.state.index}
          speed={this.props.speed}
        />
        <SliderArrow turn={this.turn}/>
        <SliderDots items={this.props.items} index={this.state.index} turn={this.turn}/>
      </div>
    )
  }
}