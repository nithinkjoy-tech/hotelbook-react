import React from "react";
import SearchComponent from "../components/common/SearchComponent";
import Carousel from "../components/common/Carousel";
import Rooms from "../components/landingPageComponent/rooms";

function LandingPage() {
  return (
    <div>
      <Carousel />
      <SearchComponent initialValues={null} />
      <Rooms />
    </div>
  );
}

export default LandingPage;
