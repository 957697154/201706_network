import React from 'react';
import {render} from 'react-dom';
import Slider from './components/Slider'
import './components/slider.css'
let IMG_DATA=[
  {src: require('./images/1.JPEG')},
  {src: require('./images/2.JPEG')},
  {src: require('./images/3.JPEG')},
];
render(
  <Slider
    items={IMG_DATA}
    speed={1.2}
    delay={2.1}
    pause={true}
    autoplay={true}
    dots={true}
    arrows={true}
  />,document.querySelector('#root')
);