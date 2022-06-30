import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import classes from "./Slider.module.css";

// import cake10 from "../../img/cake10.jpg";
// import cake11 from "../../img/cake11.jpg";
// import cake14 from "../../img/cake14.jpg";

// import cake3 from "../../img/vegan.jpg";

// import cake12 from "../../img/cake12.jpg";
// import cake7 from "../../img/cake7.jpg";
// import cake3 from "../../img/paradiseIslands.jpg";
// import cake15 from "../../img/cake15.jpg";
// import cake19 from "../../img/cake19.jpg";
// import cake25 from "../../img/cake25.jpg";
// import cake26 from "../../img/cake26.jpg";
// import cake33 from "../../img/cake77.jpg";
// import cake32 from "../../img/cake32.jpg";

import cake3 from "../../img/c1.jpg";
import cake15 from "../../img/c2.jpg";
import cake19 from "../../img/c3.jpg";
import cake25 from "../../img/c4.jpg";
import cake26 from "../../img/c5.jpg";
import cake33 from "../../img/c6.jpg";
import cake32 from "../../img/c7.jpg";

// import cake3 from "../../img/c8.jpg";
// import cake15 from "../../img/c9.jpg";
// import cake19 from "../../img/c10.jpg";
// import cake25 from "../../img/c11.jpg";
// import cake26 from "../../img/c12.jpg";
// import cake33 from "../../img/c13.jpg";
// import cake32 from "../../img/c14.jpg";

// import cake30 from "../../img/cake30.jpg";

const SimpleSlider = () => {
  const images = [
    // cake14,

    cake3,

    // cake12,
    // cake7,
    cake15,
    cake19,
    cake25,
    cake26,
    cake33,
    cake32,
  ];

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
                style={{ width: "100%", height: "100vh" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default SimpleSlider;

// import React, { Component } from "react";
// import Slider from "react-slick/lib/slider";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import classes from "./Slider.module.css";

// import pizza1 from "../../img/pizza-1.jpg";
// import burger1 from "../../img/burger-1.jpg";
// import salad1 from "../../img/salad-1.jpg";
// import lunch1 from "../../img/lunch-1.jpg";
// import dessert1 from "../../img/dessert-1.jpg";

// export default function SimpleSlider() {
//   const images = [pizza1, burger1, dessert1, lunch1, salad1];

// const settings = {
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   infinite: false,
//   // autoplay: true,
//   dots: true,
//   // infinite: true,
//   // speed: 2000,
//   // slidesToShow: 1,
//   // slidesToScroll: 1,
// };

//   const settings = {
//     dots: true,

//     speed: 200,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="Slider">
//       <Slider {...settings}>
//         {images.map((image) => (
//           <div>
//             <img
//               src={image}
//               alt={image}
//               style={{ width: "200px", height: "40vh" }}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
