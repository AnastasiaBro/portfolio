import React, { Component } from "react";
import Slider from "react-slick";
import './MultipleItems.css';

import pic1 from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic3 from '../../assets/images/pic3.jpg';
import pic4 from '../../assets/images/pic4.jpg';
import pic5 from '../../assets/images/pic5.jpg';
import pic6 from '../../assets/images/pic6.jpg';
import pic7 from '../../assets/images/pic7.jpg';
import pic8 from '../../assets/images/pic8.jpg';
import pic9 from '../../assets/images/pic9.jpg';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="items">
        <h3>Иллюстрации</h3>
        <Slider {...settings}>
          <div>
            <img className="items__image" src={pic1} alt="иллюстрация"/>
          </div>
          <div>
            <img className="items__image" src={pic3} alt="иллюстрация"/>
          </div>
          <div>
            <img className="items__image" src={pic2} alt="иллюстрация"/>
          </div>
          <div>
            <img className="items__image" src={pic4} alt="иллюстрация"/>
          </div>
          <div>
            <img className="items__image" src={pic5} alt="иллюстрация"/>
          </div>
          <div>
            <img className="items__image" src={pic9} alt="иллюстрация"/>
          </div>
          <div>
            <img className="items__image" src={pic6} alt="иллюстрация"/>
          </div>
          <div>
            <img className="items__image" src={pic7} alt="иллюстрация"/>
          </div>
          <div>
            <img className="items__image" src={pic8} alt="иллюстрация"/>
          </div>
        </Slider>
      </div>
    );
  }
}