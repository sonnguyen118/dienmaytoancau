import React from "react";
import Slider from "react-slick";

const Trademark = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 7,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  const listTrademark = [
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
    "/components/trademark/bosch.png",
  ];
  return (
    <div className="trademark">
      <Slider {...settings}>
        {listTrademark.map((i) => (
          <>
            <div
              className="trademark-img"
              style={{ backgroundImage: `url(${i})` }}
            ></div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Trademark;
