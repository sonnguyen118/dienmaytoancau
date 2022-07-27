import React from "react";
import Slider from "react-slick";

const ListNews = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    slidesPerRow: 1,
  };
  const listNews = [
    {
      image: "/components/news/1.jpg",
      title: "Cục Phó Cảnh sát Hình sự làm Phó Giám đốc Công an TP.HCM",
      sub: "Cả 6 người thân trong gia đình, chỉ trong một đêm gặp sự cố đã ra đi mãi mãi khiến nhiều người đau xót.",
    },
    {
      image: "/components/news/1.jpg",
      title: "Cục Phó Cảnh sát Hình sự làm Phó Giám đốc Công an TP.HCM",
      sub: "Cả 6 người thân trong gia đình, chỉ trong một đêm gặp sự cố đã ra đi mãi mãi khiến nhiều người đau xót.",
    },
    {
      image: "/components/news/1.jpg",
      title: "Cục Phó Cảnh sát Hình sự làm Phó Giám đốc Công an TP.HCM",
      sub: "Cả 6 người thân trong gia đình, chỉ trong một đêm gặp sự cố đã ra đi mãi mãi khiến nhiều người đau xót.",
    },
    {
      image: "/components/news/1.jpg",
      title: "Cục Phó Cảnh sát Hình sự làm Phó Giám đốc Công an TP.HCM",
      sub: "Cả 6 người thân trong gia đình, chỉ trong một đêm gặp sự cố đã ra đi mãi mãi khiến nhiều người đau xót.",
    },
    {
      image: "/components/news/1.jpg",
      title: "Cục Phó Cảnh sát Hình sự làm Phó Giám đốc Công an TP.HCM",
      sub: "Cả 6 người thân trong gia đình, chỉ trong một đêm gặp sự cố đã ra đi mãi mãi khiến nhiều người đau xót.",
    },
    {
      image: "/components/news/1.jpg",
      title: "Cục Phó Cảnh sát Hình sự làm Phó Giám đốc Công an TP.HCM",
      sub: "Cả 6 người thân trong gia đình, chỉ trong một đêm gặp sự cố đã ra đi mãi mãi khiến nhiều người đau xót.",
    },
    {
      image: "/components/news/1.jpg",
      title: "Cục Phó Cảnh sát Hình sự làm Phó Giám đốc Công an TP.HCM",
      sub: "Cả 6 người thân trong gia đình, chỉ trong một đêm gặp sự cố đã ra đi mãi mãi khiến nhiều người đau xót.",
    },
  ];
  return (
    <div className="list-news">
      <Slider {...settings}>
        {listNews.map((news, index) => (
          <>
            <div className="list-news-item">
              <div
                className="list-news-item-img"
                style={{ backgroundImage: `url(${news.image})` }}
              ></div>
              <div className="list-news-item-infor">
                <div className="list-news-item-infor-title">{news.title}</div>
                <div className="list-news-item-infor-sub">{news.sub}</div>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default ListNews;
