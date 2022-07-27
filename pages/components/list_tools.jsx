import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const ListTools = () => {
  const slider = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    arrows: false,
    cssEase: "linear",
  };
  const itemBlock4 = [
    { img: "/components/block4/text.jpg", title: "Máy cắt đa năng" },
    { img: "/components/block4/text.jpg", title: "Máy cắt đa năng" },
    { img: "/components/block4/text.jpg", title: "Máy cắt đa năng" },
    { img: "/components/block4/text.jpg", title: "Máy cắt đa năng" },
    { img: "/components/block4/text.jpg", title: "Máy cắt đa năng" },
    { img: "/components/block4/text.jpg", title: "Máy cắt đa năng" },
    { img: "/components/block4/text.jpg", title: "Máy cắt đa năng" },
    { img: "/components/block4/text.jpg", title: "Máy cắt đa năng" },
    { img: "/components/block4/text.jpg", title: "Máy cắt đa năng" },
    { img: "/components/block4/text.jpg", title: "Máy cắt đa năng" },
  ];
  const itemBlock5 = [
    {
      img: "/components/block4/text.jpg",
      title:
        "Công ty chúng tôi được thành lập từ năm 2004 với thương hiệu là Asiasoft Việt Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "Công ty chúng tôi được thành lập từ năm 2004 với thương hiệu là Asiasoft Việt Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "Công ty chúng tôi được thành lập từ năm 2004 với thương hiệu là Asiasoft Việt Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "Công ty chúng tôi được thành lập từ năm 2004 với thương hiệu là Asiasoft Việt Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "Công ty chúng tôi được thành lập từ năm 2004 với thương hiệu là Asiasoft Việt Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "Công ty chúng tôi được thành lập từ năm 2004 với thương hiệu là Asiasoft Việt Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "Công ty chúng tôi được thành lập từ năm 2004 với thương hiệu là Asiasoft Việt Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "Công ty chúng tôi được thành lập từ năm 2004 với thương hiệu là Asiasoft Việt Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
  ];
  return (
    <>
      <div className="home__block4">
        <div className="home__block4-title">
          <div className="home__block4-title-1">
            <div className="home__block4-title-1-wall"></div>
            <h2 className="home__block4-title-1-text">CÔNG CỤ & DỤNG CỤ</h2>
          </div>
          <div className="home__block4-title-2">Xem tất cả [+]</div>
        </div>
        <div className="home__block4-main">
          <div className="home__block4-main-img"></div>
          <div className="home__block4-main-group">
            {itemBlock4.map((item, index) => (
              <>
                <div className="home__block4-main-group-item">
                  <div
                    className="home__block4-main-group-item-img"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <p className="home__block4-main-group-item-text">
                    {item.title}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="home__block5">
        <div className="home__block5-title">
          <h3 className="home__block5-title-1">Công cụ & dụng cụ nổi bật</h3>
          <div className="home__block5-title-2">Xem tất cả sản phẩm</div>
        </div>
        <div className="home__block5-slider">
          <div className="home__block2-slider-btn1" onClick={previous}>
            <i className="fas fa-angle-left home__block2-slider-btn1-icon"></i>
          </div>
          <div className="home__block2-slider-btn2" onClick={next}>
            <i className="fas fa-angle-right home__block2-slider-btn2-icon"></i>
          </div>
          <Slider ref={(c) => (slider.current = c)} {...settings}>
            {itemBlock5.map((item, index) => (
              <>
                <div className="home__block5-slider-item">
                  <div
                    className="home__block5-slider-item-img"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <p className="home__block5-slider-item-text">{item.title}</p>
                  <p className="home__block5-slider-item-category">
                    {item.category}
                  </p>
                  <div className="home__block5-slider-item-infor">
                    <span className="home__block5-slider-item-infor-price">
                      {item.price_new}đ
                    </span>
                    <div className="home__block5-slider-item-infor-social">
                      <i className="fas fa-star home__block5-slider-item-infor-social-icon"></i>
                      <i className="fas fa-star home__block5-slider-item-infor-social-icon"></i>
                      <i className="fas fa-star home__block5-slider-item-infor-social-icon"></i>
                      <i className="fas fa-star home__block5-slider-item-infor-social-icon"></i>
                      <i className="fas fa-star home__block5-slider-item-infor-social-icon"></i>
                      <span className="home__block5-slider-item-infor-social-text">
                        ({item.comment})
                      </span>
                    </div>
                  </div>
                  <p className="home__block5-slider-item-oldprice">
                    {item.price_old}đ
                  </p>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ListTools;
