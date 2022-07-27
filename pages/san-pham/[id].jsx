import React, { useState, useRef } from "react";
import Layout from "../components/layout";
import Slider from "react-slick";
import CounterInput from "react-counter-input";
import Image from "next/image";

const MyProduct = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    arrows: false,
    cssEase: "linear",
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const sliderProducts = [
    "https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-6/294699135_3113717502211205_2549159502426192844_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cqd9oa4qALcAX-6z3i_&_nc_ht=scontent.fhph1-3.fna&oh=00_AT8ZKNGv46tpHxrxsQJ_iUAWpiUMvCk9QwEWM7sQvZGV5w&oe=62E4F325",
    "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/294574863_3113717478877874_4689268654625901460_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=CJd2mCKZrhwAX_a_qDW&_nc_oc=AQlqk7WrNAw5uIBoN7pEbM9V2vGxQ4wr88GW0KKufoZXNmiABl-KjIsScHImqL20NnS9VVhZoCfsg5AGvHohLsth&_nc_ht=scontent.fhph1-2.fna&oh=00_AT89pPvix7jOKQ6rB13e7T_uxmphxmkW-bFlSWQd9M22fw&oe=62E60A5F",
    "https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/294590459_3113717452211210_407208379575082059_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-E2bC9dzEPUAX_NU0B3&_nc_ht=scontent.fhph2-1.fna&oh=00_AT8DwJrdlGILHjZmcR3y736zJGkdr2QMMUKmRfnay0JPsg&oe=62E6392E",
    "https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-6/294672552_3113717428877879_2217381284316070838_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PprbYaGUqP0AX_KyhsU&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-clrNDhOBt5LyLobbwm57u6xw14g__YA0sa4r7DE_yPw&oe=62E6ACF9",
    "https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/294604523_3113716772211278_3355055214385018446_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=--Ih2C6H4BsAX-Fd7c5&_nc_ht=scontent.fhph2-1.fna&oh=00_AT9DXZGaaVAk_z4pTpv3x34ngEoiBdMXBKTFOZs-fm7VVw&oe=62E69E75",
    "https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-6/294672552_3113717428877879_2217381284316070838_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PprbYaGUqP0AX_KyhsU&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-clrNDhOBt5LyLobbwm57u6xw14g__YA0sa4r7DE_yPw&oe=62E6ACF9",
    "https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/294604523_3113716772211278_3355055214385018446_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=--Ih2C6H4BsAX-Fd7c5&_nc_ht=scontent.fhph2-1.fna&oh=00_AT9DXZGaaVAk_z4pTpv3x34ngEoiBdMXBKTFOZs-fm7VVw&oe=62E69E75",
  ];
  const inputCounterStyle = {
    border: "#bfbfbf 1px solid",
    // borderRadius: "3px",
    height: "40px",
    width: "40px",
    // color: "#000",
    // fontSize: "16px",
    // margin: "0 10px",
  };

  const inputBtnStyle = {
    border: "#bfbfbf 1px solid",
    // borderRadius: "3px",
    height: "40px",
    width: "40px",
    padding: "0 0px 0 12px",
    color: "#000",
    fontSize: "28px",
  };
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
    <Layout>
      <div className="myproduct">
        <div className="myproduct-left">
          <div className="myproduct-left-block1">
            <div className="myproduct-left-block1-slider">
              <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                className="myproduct-left-block1-slider-first"
                // {...settings}
                dots={false}
              >
                {sliderProducts.map((i) => (
                  <>
                    <div
                      className="myproduct-left-block1-slider-first-item"
                      style={{ backgroundImage: `url(${i})` }}
                    ></div>
                  </>
                ))}
              </Slider>
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={5}
                slidesToScroll={1}
                swipeToSlide={true}
                focusOnSelect={true}
                className="myproduct-left-block1-slider-second"
              >
                {sliderProducts.map((i) => (
                  <>
                    <div
                      className="myproduct-left-block1-slider-second-item"
                      style={{ backgroundImage: `url(${i})` }}
                    ></div>
                  </>
                ))}
              </Slider>
            </div>
            <div className="myproduct-left-block1-infor">
              <div className="myproduct-left-block1-infor-title">
                <h2 className="myproduct-left-block1-infor-title-content">
                  Máy rửa xe Delonghi INM J-890
                </h2>
                <div className="myproduct-left-block1-infor-title-social">
                  <p className="myproduct-left-block1-infor-title-social-text">
                    Máy rửa xe
                  </p>
                  <i className="fas fa-star myproduct-left-block1-infor-title-social-icon"></i>
                  <i className="fas fa-star myproduct-left-block1-infor-title-social-icon"></i>
                  <i className="fas fa-star myproduct-left-block1-infor-title-social-icon"></i>
                  <i className="fas fa-star myproduct-left-block1-infor-title-social-icon"></i>
                  <i className="fas fa-star myproduct-left-block1-infor-title-social-icon"></i>
                  <p className="myproduct-left-block1-infor-title-social-total">
                    (108)
                  </p>
                </div>
                <p className="myproduct-left-block1-infor-title-category">
                  Thương hiệu:{" "}
                  <span className="myproduct-left-block1-infor-title-category-text">
                    Nokia
                  </span>
                </p>
              </div>
              <div className="myproduct-left-block1-infor-price">
                <div className="myproduct-left-block1-infor-price-price">
                  <p className="myproduct-left-block1-infor-price-price-new">
                    1.999.000đ
                  </p>
                  <p className="myproduct-left-block1-infor-price-price-old">
                    2.310.000đ
                  </p>
                  <p className="myproduct-left-block1-infor-price-price-discount">
                    -14%
                  </p>
                </div>
                <p className="myproduct-left-block1-infor-price-state">
                  Trạng thái:{" "}
                  <span className="myproduct-left-block1-infor-price-state-text">
                    Còn hàng
                  </span>
                </p>
                <div className="myproduct-left-block1-infor-price-choose">
                  <p className="myproduct-left-block1-infor-price-choose-text">
                    Chọn số lượng:
                  </p>
                  <div className="myproduct-left-block1-infor-price-choose-count">
                    <CounterInput
                      inputStyle={inputCounterStyle}
                      btnStyle={inputBtnStyle}
                      min={0}
                      max={1000}
                      onCountChange={(count) => console.log(count)}
                    />
                  </div>
                  <p className="myproduct-left-block1-infor-price-choose-text">
                    Cho vào giỏ
                  </p>
                  <i className="fas fa-cart-plus myproduct-left-block1-infor-price-choose-icon"></i>
                </div>
              </div>
              <div className="myproduct-left-block1-infor-btn">
                <div className="myproduct-left-block1-infor-btn-item">
                  <p className="myproduct-left-block1-infor-btn-item-p">
                    ĐẶT MUA
                  </p>
                  <p className="myproduct-left-block1-infor-btn-item-s">
                    Giao tận nơi trân toàn quốc
                  </p>
                </div>
                <div className="myproduct-left-block1-infor-btn-item">
                  <p className="myproduct-left-block1-infor-btn-item-p">
                    TƯ VẤN
                  </p>
                  <p className="myproduct-left-block1-infor-btn-item-s">
                    Chúng tôi sẽ gọi lại cho bạn
                  </p>
                </div>
              </div>
              <ul className="myproduct-left-block1-infor-ul">
                <li className="myproduct-left-block1-infor-ul-li">
                  Màu sắc: {"Đen"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Công suất: {"Đen"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Công suất lọc: {"Đen"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Chất liệu: {"Đen"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Dung tích: {"Đen"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Kích thước: {"Đen"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Nguồn điện áp: {"Đen"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Trọng lượng sản phẩm: {"Đen"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Thương hiệu: {"Đen"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Bảo hành: {"Đen"}
                </li>
              </ul>
            </div>
          </div>
          <div className="myproduct-left-block2">
            <div className="home__block5-title">
              <h3 className="home__block5-title-1">Sản phẩm tương tự</h3>
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
                      <p className="home__block5-slider-item-text">
                        {item.title}
                      </p>
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
          <div className="myproduct-left-block3">
            <div className="title">
              <div className="title-wall"></div>
              <h2 className="title-text">THÔNG TIN SẢN PHẨM</h2>
            </div>
            <div className="myproduct-left-block3-table">
              <ul className="myproduct-left-block3-table-menu">
                <li className="myproduct-left-block3-table-text">Màu sắc</li>
                <li className="myproduct-left-block3-table-text">Công suất</li>
                <li className="myproduct-left-block3-table-text">
                  Công suất lọc
                </li>
                <li className="myproduct-left-block3-table-text">Chất liệu</li>
                <li className="myproduct-left-block3-table-text">Dung tích</li>
                <li className="myproduct-left-block3-table-text">Kích thước</li>
                <li className="myproduct-left-block3-table-text">
                  Nguồn điện áp
                </li>
                <li className="myproduct-left-block3-table-text">
                  Trọng lượng sản phẩm
                </li>
                <li className="myproduct-left-block3-table-text">
                  Thương hiệu
                </li>
                <li className="myproduct-left-block3-table-text">
                  Sản xuất tại
                </li>
                <li className="myproduct-left-block3-table-text">Bảo hành</li>
              </ul>
              <ul className="myproduct-left-block3-table-value">
                <li className="myproduct-left-block3-table-text">Đen</li>
                <li className="myproduct-left-block3-table-text">900W</li>
                <li className="myproduct-left-block3-table-text">
                  10 tách/lần
                </li>
                <li className="myproduct-left-block3-table-text">
                  Kim loại và nhựa
                </li>
                <li className="myproduct-left-block3-table-text">
                  Bình nước (1,25 lít)
                </li>
                <li className="myproduct-left-block3-table-text">
                  20xm x 23,7cm x 33 cm
                </li>
                <li className="myproduct-left-block3-table-text">
                  220V -240V /50Hz - 60Hz
                </li>
                <li className="myproduct-left-block3-table-text">1,7 Kg</li>
                <li className="myproduct-left-block3-table-text">Italya</li>
                <li className="myproduct-left-block3-table-text">Trung Quốc</li>
                <li className="myproduct-left-block3-table-text">12 tháng</li>
              </ul>
            </div>
            <div className="myproduct-left-block3-parapharse">
              <p className="myproduct-left-block3-parapharse-text">
                Tần Thủy Hoàng (Tiếng Trung: 秦始皇) (18 tháng 2 năm 259 TCN –
                11 tháng 7 năm 210 TCN), tên huý là Chính (政), tính Doanh (嬴),
                thị Triệu (趙) hoặc Tần (秦), là vị vua thứ 36 của nước Tần,
                đồng thời là Hoàng đế đầu tiên thống nhất Trung Hoa sau khi tiêu
                diệt sáu nước chư hầu, chấm dứt thời kỳ Chiến Quốc vào năm 221
                TCN.[2] Ông lên ngôi Tần vương năm 13 tuổi và trở thành Hoàng đế
                năm 38 tuổi. Thay vì tiếp tục xưng vương như các vị vua thời nhà
                Thương và nhà Chu, để đánh dấu mốc cho việc thống nhất Trung Hoa
                và chứng tỏ nhà Tần còn vĩ đại hơn các triều đại trước, ông tự
                tạo ra một danh hiệu mới là (皇帝) và tự gọi mình là Thủy Hoàng
                đế (始皇帝).
                <br></br>
                <br></br>
                Theo sách sử, việc xây dựng lăng mộ Tần Thủy Hoàng bắt đầu năm
                246 trước Công nguyên và sử dụng đến 700.000 nhân công và thợ
                thủ công trong 38 năm. Hoàng đế Tần Thủy Hoàng được chôn trong
                quan tài cùng với nhiều ngọc ngà châu báu, nhiều tác phẩm thủ
                công và một mô hình vũ trụ hoàn chỉnh được khảm ngọc và đặt
                trong dòng thủy ngân dùng để biểu tượng cho dòng sông đang chảy
                hoặc có thể dùng để diệt khuẩn và gây độc chết người về sau cho
                người muốn phá mộ. Những viên trân châu được đặt trên nóc mộ
                dùng để biểu tượng cho những ngôi sao và các hành tinh. Những
                khai quật gần đây cho thấy có một lượng thủy ngân cao trong đất
                của núi Lệ Sơn xác nhận sự trùng hợp với sách cổ.
              </p>
              <div className="myproduct-left-block3-parapharse-img"></div>
              <p className="myproduct-left-block3-parapharse-text">
                Theo sách sử, việc xây dựng lăng mộ Tần Thủy Hoàng bắt đầu năm
                246 trước Công nguyên và sử dụng đến 700.000 nhân công và thợ
                thủ công trong 38 năm. Hoàng đế Tần Thủy Hoàng được chôn trong
                quan tài cùng với nhiều ngọc ngà châu báu, nhiều tác phẩm thủ
                công và một mô hình vũ trụ hoàn chỉnh được khảm ngọc và đặt
                trong dòng thủy ngân dùng để biểu tượng cho dòng sông đang chảy
                hoặc có thể dùng để diệt khuẩn và gây độc chết người về sau cho
                người muốn phá mộ. Những viên trân châu được đặt trên nóc mộ
                dùng để biểu tượng cho những ngôi sao và các hành tinh. Những
                khai quật gần đây cho thấy có một lượng thủy ngân cao trong đất
                của núi Lệ Sơn xác nhận sự trùng hợp với sách cổ.
              </p>
            </div>
          </div>
          <div className="myproduct-left-block2">
            <div className="home__block5-title">
              <h2 className="home__block5-title-1">ĐIỆN MÁY TOÀN CẦU GỢI Ý</h2>
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
                      <p className="home__block5-slider-item-text">
                        {item.title}
                      </p>
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
          <div className="myproduct-left-block4">
            <div className="title">
              <div className="title-wall"></div>
              <h2 className="title-text">ĐÁNH GIÁ</h2>
            </div>
            <div className="myproduct-left-block4-title">
              <div className="myproduct-left-block4-title-1">
                <div className="myproduct-left-block4-title-1-group">
                  <i className="fas fa-star myproduct-left-block4-title-1-group-icon"></i>
                  <i className="fas fa-star myproduct-left-block4-title-1-group-icon"></i>
                  <i className="fas fa-star myproduct-left-block4-title-1-group-icon"></i>
                  <i className="fas fa-star myproduct-left-block4-title-1-group-icon"></i>
                  <i className="fas fa-star myproduct-left-block4-title-1-group-icon"></i>
                </div>
                <p className="myproduct-left-block4-title-1-p">
                  Đánh giá trung bình
                </p>
                <p className="myproduct-left-block4-title-1-s">
                  (có 1 đánh giá)
                </p>
                <p className="myproduct-left-block4-title-1-n">5.0</p>
              </div>

              <div className="myproduct-left-block4-title-2">
                <div className="myproduct-left-block4-title-2-row">
                  <p className="myproduct-left-block4-title-2-row-text">5</p>
                  <i className="fas fa-star myproduct-left-block4-title-2-row-icon"></i>
                  <div className="myproduct-left-block4-title-2-row-engin"></div>
                  <p className="myproduct-left-block4-title-2-row-text">
                    29 đánh giá
                  </p>
                </div>
                <div className="myproduct-left-block4-title-2-row">
                  <p className="myproduct-left-block4-title-2-row-text">4</p>
                  <i className="fas fa-star myproduct-left-block4-title-2-row-icon"></i>
                  <div className="myproduct-left-block4-title-2-row-engin"></div>
                  <p className="myproduct-left-block4-title-2-row-text">
                    0 đánh giá
                  </p>
                </div>
                <div className="myproduct-left-block4-title-2-row">
                  <p className="myproduct-left-block4-title-2-row-text">3</p>
                  <i className="fas fa-star myproduct-left-block4-title-2-row-icon"></i>
                  <div className="myproduct-left-block4-title-2-row-engin"></div>
                  <p className="myproduct-left-block4-title-2-row-text">
                    0 đánh giá
                  </p>
                </div>
                <div className="myproduct-left-block4-title-2-row">
                  <p className="myproduct-left-block4-title-2-row-text">2</p>
                  <i className="fas fa-star myproduct-left-block4-title-2-row-icon"></i>
                  <div className="myproduct-left-block4-title-2-row-engin"></div>
                  <p className="myproduct-left-block4-title-2-row-text">
                    0 đánh giá
                  </p>
                </div>
                <div className="myproduct-left-block4-title-2-row">
                  <p className="myproduct-left-block4-title-2-row-text">1</p>
                  <i className="fas fa-star myproduct-left-block4-title-2-row-icon"></i>
                  <div className="myproduct-left-block4-title-2-row-engin"></div>
                  <p className="myproduct-left-block4-title-2-row-text">
                    0 đánh giá
                  </p>
                </div>
              </div>
            </div>
            <div className="myproduct-left-block4-share">
              <div className="myproduct-left-block4-share-content">
                Đánh giá của bạn về sản phẩm
              </div>
              <div className="myproduct-left-block4-share-box">
                <div className="fas fa-star myproduct-left-block4-share-box-icon"></div>
                <p className="myproduct-left-block4-share-box-text">
                  Không thích
                </p>
              </div>
              <div className="myproduct-left-block4-share-box">
                <div className="fas fa-star myproduct-left-block4-share-box-icon"></div>
                <p className="myproduct-left-block4-share-box-text">Tạm được</p>
              </div>
              <div className="myproduct-left-block4-share-box">
                <div className="fas fa-star myproduct-left-block4-share-box-icon"></div>
                <p className="myproduct-left-block4-share-box-text">
                  Bình thường
                </p>
              </div>
              <div className="myproduct-left-block4-share-box">
                <div className="fas fa-star myproduct-left-block4-share-box-icon"></div>
                <p className="myproduct-left-block4-share-box-text">Hài lòng</p>
              </div>
              <div className="myproduct-left-block4-share-box">
                <div className="fas fa-star myproduct-left-block4-share-box-icon"></div>
                <p className="myproduct-left-block4-share-box-text">
                  Tuyệt vời
                </p>
              </div>
            </div>
            <div className="myproduct-left-block4-comment">
              <p className="myproduct-left-block4-comment-title">
                Bạn đang băn khoăn cần tư vấn? Vui lòng để lại số điện thoại
                hoặc lời nhắn. Chúng tôi sẽ liên hệ trả lời bạn sớm nhất
              </p>
              <div className="myproduct-left-block4-comment-a">
                <textarea
                  placeholder="Nhập câu hỏi/ bình luận / nhận xét tại đây ..."
                  type="text"
                  className="myproduct-left-block4-comment-a-textarea"
                ></textarea>
                <div className="myproduct-left-block4-comment-a-button">
                  <i className="fas fa-camera myproduct-left-block4-comment-a-button-icon"></i>
                  <span className="myproduct-left-block4-comment-a-button-text">
                    Gửi ảnh
                  </span>
                </div>
              </div>
              <div className="myproduct-left-block4-comment-b">
                <input
                  type={"text"}
                  placeholder="Nhập tên của bạn"
                  className="myproduct-left-block4-comment-b-input"
                ></input>
                <button className="myproduct-left-block4-comment-b-btn">
                  Gửi đánh giá
                </button>
              </div>
            </div>
          </div>
          <div className="myproduct-left-block2">
            <div className="title">
              <div className="title-wall"></div>
              <h2 className="title-text">SẢN PHẨM CÙNG THƯƠNG HIỆU</h2>
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
                      <p className="home__block5-slider-item-text">
                        {item.title}
                      </p>
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
        </div>
        <div className="myproduct-right">
          <div className="myproduct-right-block1">
            <p className="myproduct-right-block1-title">Thông tin hữu ích</p>
            <ul>
              <li className="myproduct-right-block1-li">
                <i className="myproduct-right-block1-li-icon fas fa-angle-right"></i>
                <p className="myproduct-right-block1-li-p">
                  Trung tâm bảo hành
                </p>
              </li>
              <li className="myproduct-right-block1-li">
                <i className="myproduct-right-block1-li-icon fas fa-angle-right"></i>
                <p className="myproduct-right-block1-li-p">
                  Hướng dẫn vận chuyển
                </p>
              </li>
              <li className="myproduct-right-block1-li">
                <i className="myproduct-right-block1-li-icon fas fa-angle-right"></i>
                <p className="myproduct-right-block1-li-p">
                  Hướng dẫn thanh toán
                </p>
              </li>
            </ul>
          </div>
          <div className="myproduct-right-block1">
            <p className="myproduct-right-block1-title">Chat với chúng tôi</p>
            <div className="myproduct-right-block1-btn">
              <div className="myproduct-right-block1-btn-img"></div>
              <div className="myproduct-right-block1-btn-img"></div>
            </div>
          </div>
          <div className="myproduct-right-block2">
            <p className="myproduct-right-block2-line">
              <span className="myproduct-right-block2-line-title">Hà Nội:</span>{" "}
              Số 30 Phạm Văn Đồng - Quận Cầu Giấy - Hà Nội
            </p>
            <p className="myproduct-right-block2-line">
              <span className="myproduct-right-block2-line-title">
                Hotline:
              </span>{" "}
              <span className="myproduct-right-block2-line-title-red">
                0987 667 577
              </span>{" "}
              |{" "}
              <span className="myproduct-right-block2-line-title-red">
                0969 563 389
              </span>
            </p>
            <p className="myproduct-right-block2-line">
              <span className="myproduct-right-block2-line-title">
                Điện thoại:
              </span>{" "}
              <span className="myproduct-right-block2-line-title-red">
                0938 385 333
              </span>{" "}
              |{" "}
              <span className="myproduct-right-block2-line-title-red">
                0869 682 688
              </span>
            </p>
          </div>
          <div className="myproduct-right-block2">
            <p className="myproduct-right-block2-line">
              <span className="myproduct-right-block2-line-title">TP.HCM:</span>{" "}
              Số 238 Hoàng Hoa Thám P.12. Q.Tân Bình, Tp.HCM
            </p>
            <p className="myproduct-right-block2-line">
              <span className="myproduct-right-block2-line-title">
                Hotline:
              </span>{" "}
              <span className="myproduct-right-block2-line-title-red">
                0987 667 577
              </span>{" "}
              |{" "}
              <span className="myproduct-right-block2-line-title-red">
                0969 563 389
              </span>
            </p>
            <p className="myproduct-right-block2-line">
              <span className="myproduct-right-block2-line-title">
                Điện thoại:
              </span>{" "}
              <span className="myproduct-right-block2-line-title-red">
                0938 385 333
              </span>{" "}
              |{" "}
              <span className="myproduct-right-block2-line-title-red">
                0869 682 688
              </span>
            </p>
          </div>
          <div className="myproduct-right-block3"></div>
          <div className="myproduct-right-block4"></div>
        </div>
      </div>
    </Layout>
  );
};

export default MyProduct;
