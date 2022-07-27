import React from "react";
import Image from "next/image";
import Layout from "../components/layout";
import Pagination from "../components/pagination";

const NewsPage = () => {
  const News = [
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
    <Layout>
      <div className="news">
        <div className="news-wrap">
          {News.map((news, index) => (
            <>
              <div className="news-wrap-item">
                <div
                  className="news-wrap-item-img"
                  style={{ backgroundImage: `url(${news.image})` }}
                ></div>
                <div className="news-wrap-item-content">
                  <p className="news-wrap-item-content-title">{news.title}</p>
                  <p className="news-wrap-item-content-sub">{news.sub}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="news-paginations">
          <Pagination />
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
