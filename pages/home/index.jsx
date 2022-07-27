import React, { useRef } from "react";
import ListProducts from "../components/list_products";
import Image from "next/image";
import Slider from "react-slick";
import { Slide } from "react-slideshow-image";
import ListTools from "../components/list_tools";
import Trademark from "../components/trademark";
import ListProjects from "../components/listprojects";
import ListNews from "../components/listnews";

const HomePage = () => {
  const slideImages = [
    {
      url: "/components/test_baner_1.jpg",
      caption: "Slide 1",
    },
    {
      url: "/components/test_baner_2.jpg",
      caption: "Slide 2",
    },
    {
      url: "/components/test_baner_3.jpg",
      caption: "Slide 3",
    },
    {
      url: "/components/test_baner_3.jpg",
      caption: "Slide 4",
    },
    {
      url: "/components/test_baner_3.jpg",
      caption: "Slide 5",
    },
  ];
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

  const slideEndow = [
    {
      image: "/components/endow/endow_1.jpg",
      title:
        "The easiest way to try out react-slick is using the  Code Sandbox example or you can create an index",
      price_old: "2.000.000",
      price_new: "1.300.000",
      total: 120,
      percent_total: 20,
      percent_endow: 40,
    },
    {
      image: "/components/endow/endow_2.jpg",
      title:
        "The easiest way to try out react-slick is using the  Code Sandbox example or you can create an index",
      price_old: "2.000.000",
      price_new: "1.300.000",
      total: 120,
      percent_total: 20,
      percent_endow: 40,
    },
    {
      image: "/components/endow/endow_3.jpg",
      title:
        "The easiest way to try out react-slick is using the  Code Sandbox example or you can create an index",
      price_old: "2.000.000",
      price_new: "1.300.000",
      total: 120,
      percent_total: 20,
      percent_endow: 40,
    },
    {
      image: "/components/endow/endow_4.jpg",
      title:
        "The easiest way to try out react-slick is using the  Code Sandbox example or you can create an index",
      price_old: "2.000.000",
      price_new: "1.300.000",
      total: 120,
      percent_total: 20,
      percent_endow: 40,
    },
    {
      image: "/components/endow/endow_5.jpg",
      title:
        "The easiest way to try out react-slick is using the  Code Sandbox example or you can create an index",
      price_old: "2.000.000",
      price_new: "1.300.000",
      total: 120,
      percent_total: 20,
      percent_endow: 40,
    },
    {
      image: "/components/endow/endow_6.jpg",
      title:
        "The easiest way to try out react-slick is using the  Code Sandbox example or you can create an index",
      price_old: "2.000.000",
      price_new: "1.300.000",
      total: 120,
      percent_total: 20,
      percent_endow: 40,
    },
    {
      image: "/components/endow/endow_7.jpg",
      title:
        "The easiest way to try out react-slick is using the  Code Sandbox example or you can create an index",
      price_old: "2.000.000",
      price_new: "1.300.000",
      total: 120,
      percent_total: 20,
      percent_endow: 40,
    },
    {
      image: "/components/endow/endow_8.jpg",
      title:
        "The easiest way to try out react-slick is using the  Code Sandbox example or you can create an index",
      price_old: "2.000.000",
      price_new: "1.300.000",
      total: 120,
      percent_total: 20,
      percent_endow: 40,
    },
    {
      image: "/components/endow/endow_9.jpg",
      title:
        "The easiest way to try out react-slick is using the  Code Sandbox example or you can create an index",
      price_old: "2.000.000",
      price_new: "1.300.000",
      total: 120,
      percent_total: 20,
      percent_endow: 40,
    },
    {
      image: "/components/endow/endow_10.jpg",
      title:
        "The easiest way to try out react-slick is using the  Code Sandbox example or you can create an index",
      price_old: "2.000.000",
      price_new: "1.300.000",
      total: 120,
      percent_total: 20,
      percent_endow: 40,
    },
  ];

  const itemEndowing = [
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_2.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_3.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_4.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
    {
      image: "/components/endowing/endowing_1.jpg",
      title: "Máy cắt đa năng",
    },
  ];

  return (
    <div className="home">
      <div className="home__block1">
        <div className="home__block1-list_products">
          <ListProducts />
        </div>
        <div className="home__block1-group">
          <div className="home__block1-group_box1">
            <div className="home__block1-group_box1-slide">
              <Slide>
                {slideImages.map((slideImage, index) => (
                  <div
                    className="home__block1-group_box1-slide-each"
                    key={index}
                  >
                    <div
                      className="home__block1-group_box1-slide-each-img"
                      style={{ backgroundImage: `url(${slideImage.url})` }}
                    >
                      <span>{slideImage.caption}</span>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
            <div className="home__block1-group_box1-bos">
              <div className="home__block1-group_box1-bos-item"></div>
              <div className="home__block1-group_box1-bos-item"></div>
            </div>
          </div>
          <div className="home__block1-group_box2">
            <div className="home__block1-group_box2-item"></div>
            <div className="home__block1-group_box2-item"></div>
            <div className="home__block1-group_box2-item"></div>
          </div>
        </div>
      </div>
      <div className="home__block2">
        <div className="home__block2-title">
          <i className="fas fa-bolt home__block2-title-icon"></i>
          <h3 className="home__block2-title-text">ƯU ĐÃI ĐANG ÁP DỤNG</h3>
        </div>
        <div className="home__block2-slider">
          <div className="home__block2-slider-btn1" onClick={previous}>
            <i className="fas fa-angle-left home__block2-slider-btn1-icon"></i>
          </div>
          <div className="home__block2-slider-btn2" onClick={next}>
            <i className="fas fa-angle-right home__block2-slider-btn2-icon"></i>
          </div>
          <Slider
            ref={(c) => (slider.current = c)}
            {...settings}
            className="home__block2-slider-slider"
          >
            {slideEndow.map((Endow, index) => (
              <>
                <div className="home__block2-slider-item">
                  <div
                    className="home__block2-slider-item-img"
                    style={{ backgroundImage: `url(${Endow.image})` }}
                  ></div>
                  <div className="home__block2-slider-item-text">
                    {Endow.title}
                  </div>
                  <div className="home__block2-slider-item-price">
                    <p className="home__block2-slider-item-price-old">
                      {Endow.price_old}đ
                    </p>
                    <p className="home__block2-slider-item-price-new">
                      {Endow.price_new}đ
                    </p>
                  </div>
                  <div className="home__block2-slider-item-total">
                    <p className="home__block2-slider-item-total-number">
                      Đã bán {Endow.total}
                    </p>
                  </div>
                  <div className="home__block2-slider-item-sudo">
                    -{Endow.percent_endow}%
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
      <div className="home__block3">
        <div className="home__block3-title">
          <div className="home__block3-title-icon">
            <Image
              src={`/components/endowing/icon_title.png`}
              alt="Điện Máy Toàn Cầu"
              layout="fill"
              data-testid="close-icon"
              objectFit="contain"
            />
          </div>
          <h3 className="home__block3-title-text">ƯU ĐÃI ĐANG ÁP DỤNG</h3>
        </div>
        <div className="home__block3-main">
          {itemEndowing.map((item, index) => (
            <>
              <div className="home__block3-main-item">
                <div
                  className="home__block3-main-item-img"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <p className="home__block3-main-item-text">{item.title}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <ListTools />
      <ListTools />
      <ListTools />
      <div className="home__block6">
        <div className="home__block6-title">
          <div className="home__block6-title-wall"></div>
          <h2 className="home__block6-title-text">THƯƠNG HIỆU NỔI BẬT</h2>
        </div>
        <div className="home__block6-main">
          <Trademark />
        </div>
      </div>
      <div className="home__block6">
        <div className="home__block6-title">
          <div className="home__block6-title-wall"></div>
          <h2 className="home__block6-title-text">
            CÁC DỰ ÁN TIÊU BIỂU CỦA CHÚNG TÔI
          </h2>
        </div>
        <div className="home__block6-main">
          <ListProjects />
        </div>
      </div>
      <div className="home__block6">
        <div className="home__block6-title">
          <div className="home__block6-title-wall"></div>
          <h2 className="home__block6-title-text">TIN TỨC - SỰ KIỆN</h2>
        </div>
        <div className="home__block6-main">
          <ListNews />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
