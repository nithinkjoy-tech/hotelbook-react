import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import slide1 from "../../images/slide1.jpg"
import slide2 from "../../images/slide2.jpg"
import slide3 from "../../images/slide3.jpg"

function Carousel() {
  return (
    <AwesomeSlider>
      <div data-src={slide1} />
      <div data-src={slide2} />
      <div data-src={slide3} />
    </AwesomeSlider>   
  );
}  

export default Carousel;
