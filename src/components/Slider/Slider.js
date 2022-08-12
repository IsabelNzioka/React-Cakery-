import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import classes from "./Slider.module.css";

import cake3 from "../../img/c1.jpg";
import cake15 from "../../img/c2.jpg";
import cake19 from "../../img/c3.jpg";
import cake25 from "../../img/c4.jpg";
import cake26 from "../../img/c5.jpg";
import cake33 from "../../img/c6.jpg";
import cake32 from "../../img/c7.jpg";

const SimpleSlider = () => {
  const images = [cake3, cake15, cake19, cake25, cake26, cake33, cake32];

  const settings = {
    arrows: false,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className={classes.Slider}>
      <div className={classes.imgslider}>
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item}>
              <img
                src={item}
                alt={item.alt}
                style={{ width: "100%", height: "95vh" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default SimpleSlider;
