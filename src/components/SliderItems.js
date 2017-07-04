import React, {Component}from 'react';
export default class Home extends Component {
  render() {
    let style = {
      width: (this.props.items.length+1) * 400,
      left: this.props.index * -400,
      transitionDuration: this.props.speed + 's'
    };
    return (
      <ul style={style} className="sliders">
        {
          this.props.items.map((item, index) => (
            <li className="slider" key={index}>
              <img src={item.src} alt=""/>
            </li>
          ))
        }
        <li className="slider" key={this.props.items.length}>
          <img src={this.props.items[0].src} alt=""/>
        </li>
      </ul>
    )
  }
}