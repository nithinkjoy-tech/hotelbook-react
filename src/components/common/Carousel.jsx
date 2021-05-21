import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Carousel() {
  const style = {
    //?paste properties here
    "--control-bullet-color": "#df2a2a",
    "--control-bullet-active-color": "#1dc962",
    "--loader-bar-color": "#ee1111",
    "--loader-bar-height": "5px",
    "--slider-height-percentage": "43%",
  };

  return (
    <AutoplaySlider style={style} play={true} cancelOnInteraction={false} interval={3000}>
      <div data-src={slide1} />
      <div data-src={slide2} />
      <div data-src={slide3} />
    </AutoplaySlider>
  );
}

export default Carousel;
