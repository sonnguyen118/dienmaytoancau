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
        "C??ng ty ch??ng t??i ???????c th??nh l???p t??? n??m 2004 v???i th????ng hi???u l?? Asiasoft Vi???t Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "C??ng ty ch??ng t??i ???????c th??nh l???p t??? n??m 2004 v???i th????ng hi???u l?? Asiasoft Vi???t Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "C??ng ty ch??ng t??i ???????c th??nh l???p t??? n??m 2004 v???i th????ng hi???u l?? Asiasoft Vi???t Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "C??ng ty ch??ng t??i ???????c th??nh l???p t??? n??m 2004 v???i th????ng hi???u l?? Asiasoft Vi???t Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "C??ng ty ch??ng t??i ???????c th??nh l???p t??? n??m 2004 v???i th????ng hi???u l?? Asiasoft Vi???t Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "C??ng ty ch??ng t??i ???????c th??nh l???p t??? n??m 2004 v???i th????ng hi???u l?? Asiasoft Vi???t Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "C??ng ty ch??ng t??i ???????c th??nh l???p t??? n??m 2004 v???i th????ng hi???u l?? Asiasoft Vi???t Nam",
      category: "Nokia",
      price_new: "3.000.000",
      price_old: "8.000.000",
      comment: 20,
    },
    {
      img: "/components/block4/text.jpg",
      title:
        "C??ng ty ch??ng t??i ???????c th??nh l???p t??? n??m 2004 v???i th????ng hi???u l?? Asiasoft Vi???t Nam",
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
                  M??y r???a xe Delonghi INM J-890
                </h2>
                <div className="myproduct-left-block1-infor-title-social">
                  <p className="myproduct-left-block1-infor-title-social-text">
                    M??y r???a xe
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
                  Th????ng hi???u:{" "}
                  <span className="myproduct-left-block1-infor-title-category-text">
                    Nokia
                  </span>
                </p>
              </div>
              <div className="myproduct-left-block1-infor-price">
                <div className="myproduct-left-block1-infor-price-price">
                  <p className="myproduct-left-block1-infor-price-price-new">
                    1.999.000??
                  </p>
                  <p className="myproduct-left-block1-infor-price-price-old">
                    2.310.000??
                  </p>
                  <p className="myproduct-left-block1-infor-price-price-discount">
                    -14%
                  </p>
                </div>
                <p className="myproduct-left-block1-infor-price-state">
                  Tr???ng th??i:{" "}
                  <span className="myproduct-left-block1-infor-price-state-text">
                    C??n h??ng
                  </span>
                </p>
                <div className="myproduct-left-block1-infor-price-choose">
                  <p className="myproduct-left-block1-infor-price-choose-text">
                    Ch???n s??? l?????ng:
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
                    Cho v??o gi???
                  </p>
                  <i className="fas fa-cart-plus myproduct-left-block1-infor-price-choose-icon"></i>
                </div>
              </div>
              <div className="myproduct-left-block1-infor-btn">
                <div className="myproduct-left-block1-infor-btn-item">
                  <p className="myproduct-left-block1-infor-btn-item-p">
                    ?????T MUA
                  </p>
                  <p className="myproduct-left-block1-infor-btn-item-s">
                    Giao t???n n??i tr??n to??n qu???c
                  </p>
                </div>
                <div className="myproduct-left-block1-infor-btn-item">
                  <p className="myproduct-left-block1-infor-btn-item-p">
                    T?? V???N
                  </p>
                  <p className="myproduct-left-block1-infor-btn-item-s">
                    Ch??ng t??i s??? g???i l???i cho b???n
                  </p>
                </div>
              </div>
              <ul className="myproduct-left-block1-infor-ul">
                <li className="myproduct-left-block1-infor-ul-li">
                  M??u s???c: {"??en"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  C??ng su???t: {"??en"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  C??ng su???t l???c: {"??en"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Ch???t li???u: {"??en"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Dung t??ch: {"??en"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  K??ch th?????c: {"??en"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Ngu???n ??i???n ??p: {"??en"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Tr???ng l?????ng s???n ph???m: {"??en"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  Th????ng hi???u: {"??en"}
                </li>
                <li className="myproduct-left-block1-infor-ul-li">
                  B???o h??nh: {"??en"}
                </li>
              </ul>
            </div>
          </div>
          <div className="myproduct-left-block2">
            <div className="home__block5-title">
              <h3 className="home__block5-title-1">S???n ph???m t????ng t???</h3>
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
                          {item.price_new}??
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
                        {item.price_old}??
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
              <h2 className="title-text">TH??NG TIN S???N PH???M</h2>
            </div>
            <div className="myproduct-left-block3-table">
              <ul className="myproduct-left-block3-table-menu">
                <li className="myproduct-left-block3-table-text">M??u s???c</li>
                <li className="myproduct-left-block3-table-text">C??ng su???t</li>
                <li className="myproduct-left-block3-table-text">
                  C??ng su???t l???c
                </li>
                <li className="myproduct-left-block3-table-text">Ch???t li???u</li>
                <li className="myproduct-left-block3-table-text">Dung t??ch</li>
                <li className="myproduct-left-block3-table-text">K??ch th?????c</li>
                <li className="myproduct-left-block3-table-text">
                  Ngu???n ??i???n ??p
                </li>
                <li className="myproduct-left-block3-table-text">
                  Tr???ng l?????ng s???n ph???m
                </li>
                <li className="myproduct-left-block3-table-text">
                  Th????ng hi???u
                </li>
                <li className="myproduct-left-block3-table-text">
                  S???n xu???t t???i
                </li>
                <li className="myproduct-left-block3-table-text">B???o h??nh</li>
              </ul>
              <ul className="myproduct-left-block3-table-value">
                <li className="myproduct-left-block3-table-text">??en</li>
                <li className="myproduct-left-block3-table-text">900W</li>
                <li className="myproduct-left-block3-table-text">
                  10 t??ch/l???n
                </li>
                <li className="myproduct-left-block3-table-text">
                  Kim lo???i v?? nh???a
                </li>
                <li className="myproduct-left-block3-table-text">
                  B??nh n?????c (1,25 l??t)
                </li>
                <li className="myproduct-left-block3-table-text">
                  20xm x 23,7cm x 33 cm
                </li>
                <li className="myproduct-left-block3-table-text">
                  220V -240V /50Hz - 60Hz
                </li>
                <li className="myproduct-left-block3-table-text">1,7 Kg</li>
                <li className="myproduct-left-block3-table-text">Italya</li>
                <li className="myproduct-left-block3-table-text">Trung Qu???c</li>
                <li className="myproduct-left-block3-table-text">12 th??ng</li>
              </ul>
            </div>
            <div className="myproduct-left-block3-parapharse">
              <p className="myproduct-left-block3-parapharse-text">
                T???n Th???y Ho??ng (Ti???ng Trung: ?????????) (18 th??ng 2 n??m 259 TCN ???
                11 th??ng 7 n??m 210 TCN), t??n hu?? l?? Ch??nh (???), t??nh Doanh (???),
                th??? Tri???u (???) ho???c T???n (???), l?? v??? vua th??? 36 c???a n?????c T???n,
                ?????ng th???i l?? Ho??ng ????? ?????u ti??n th???ng nh???t Trung Hoa sau khi ti??u
                di???t s??u n?????c ch?? h???u, ch???m d???t th???i k??? Chi???n Qu???c v??o n??m 221
                TCN.[2] ??ng l??n ng??i T???n v????ng n??m 13 tu???i v?? tr??? th??nh Ho??ng ?????
                n??m 38 tu???i. Thay v?? ti???p t???c x??ng v????ng nh?? c??c v??? vua th???i nh??
                Th????ng v?? nh?? Chu, ????? ????nh d???u m???c cho vi???c th???ng nh???t Trung Hoa
                v?? ch???ng t??? nh?? T???n c??n v?? ?????i h??n c??c tri???u ?????i tr?????c, ??ng t???
                t???o ra m???t danh hi???u m???i l?? (??????) v?? t??? g???i m??nh l?? Th???y Ho??ng
                ????? (?????????).
                <br></br>
                <br></br>
                Theo s??ch s???, vi???c x??y d???ng l??ng m??? T???n Th???y Ho??ng b???t ?????u n??m
                246 tr?????c C??ng nguy??n v?? s??? d???ng ?????n 700.000 nh??n c??ng v?? th???
                th??? c??ng trong 38 n??m. Ho??ng ????? T???n Th???y Ho??ng ???????c ch??n trong
                quan t??i c??ng v???i nhi???u ng???c ng?? ch??u b??u, nhi???u t??c ph???m th???
                c??ng v?? m???t m?? h??nh v?? tr??? ho??n ch???nh ???????c kh???m ng???c v?? ?????t
                trong d??ng th???y ng??n d??ng ????? bi???u t?????ng cho d??ng s??ng ??ang ch???y
                ho???c c?? th??? d??ng ????? di???t khu???n v?? g??y ?????c ch???t ng?????i v??? sau cho
                ng?????i mu???n ph?? m???. Nh???ng vi??n tr??n ch??u ???????c ?????t tr??n n??c m???
                d??ng ????? bi???u t?????ng cho nh???ng ng??i sao v?? c??c h??nh tinh. Nh???ng
                khai qu???t g???n ????y cho th???y c?? m???t l?????ng th???y ng??n cao trong ?????t
                c???a n??i L??? S??n x??c nh???n s??? tr??ng h???p v???i s??ch c???.
              </p>
              <div className="myproduct-left-block3-parapharse-img"></div>
              <p className="myproduct-left-block3-parapharse-text">
                Theo s??ch s???, vi???c x??y d???ng l??ng m??? T???n Th???y Ho??ng b???t ?????u n??m
                246 tr?????c C??ng nguy??n v?? s??? d???ng ?????n 700.000 nh??n c??ng v?? th???
                th??? c??ng trong 38 n??m. Ho??ng ????? T???n Th???y Ho??ng ???????c ch??n trong
                quan t??i c??ng v???i nhi???u ng???c ng?? ch??u b??u, nhi???u t??c ph???m th???
                c??ng v?? m???t m?? h??nh v?? tr??? ho??n ch???nh ???????c kh???m ng???c v?? ?????t
                trong d??ng th???y ng??n d??ng ????? bi???u t?????ng cho d??ng s??ng ??ang ch???y
                ho???c c?? th??? d??ng ????? di???t khu???n v?? g??y ?????c ch???t ng?????i v??? sau cho
                ng?????i mu???n ph?? m???. Nh???ng vi??n tr??n ch??u ???????c ?????t tr??n n??c m???
                d??ng ????? bi???u t?????ng cho nh???ng ng??i sao v?? c??c h??nh tinh. Nh???ng
                khai qu???t g???n ????y cho th???y c?? m???t l?????ng th???y ng??n cao trong ?????t
                c???a n??i L??? S??n x??c nh???n s??? tr??ng h???p v???i s??ch c???.
              </p>
            </div>
          </div>
          <div className="myproduct-left-block2">
            <div className="home__block5-title">
              <h2 className="home__block5-title-1">??I???N M??Y TO??N C???U G???I ??</h2>
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
                          {item.price_new}??
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
                        {item.price_old}??
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
              <h2 className="title-text">????NH GI??</h2>
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
                  ????nh gi?? trung b??nh
                </p>
                <p className="myproduct-left-block4-title-1-s">
                  (c?? 1 ????nh gi??)
                </p>
                <p className="myproduct-left-block4-title-1-n">5.0</p>
              </div>

              <div className="myproduct-left-block4-title-2">
                <div className="myproduct-left-block4-title-2-row">
                  <p className="myproduct-left-block4-title-2-row-text">5</p>
                  <i className="fas fa-star myproduct-left-block4-title-2-row-icon"></i>
                  <div className="myproduct-left-block4-title-2-row-engin"></div>
                  <p className="myproduct-left-block4-title-2-row-text">
                    29 ????nh gi??
                  </p>
                </div>
                <div className="myproduct-left-block4-title-2-row">
                  <p className="myproduct-left-block4-title-2-row-text">4</p>
                  <i className="fas fa-star myproduct-left-block4-title-2-row-icon"></i>
                  <div className="myproduct-left-block4-title-2-row-engin"></div>
                  <p className="myproduct-left-block4-title-2-row-text">
                    0 ????nh gi??
                  </p>
                </div>
                <div className="myproduct-left-block4-title-2-row">
                  <p className="myproduct-left-block4-title-2-row-text">3</p>
                  <i className="fas fa-star myproduct-left-block4-title-2-row-icon"></i>
                  <div className="myproduct-left-block4-title-2-row-engin"></div>
                  <p className="myproduct-left-block4-title-2-row-text">
                    0 ????nh gi??
                  </p>
                </div>
                <div className="myproduct-left-block4-title-2-row">
                  <p className="myproduct-left-block4-title-2-row-text">2</p>
                  <i className="fas fa-star myproduct-left-block4-title-2-row-icon"></i>
                  <div className="myproduct-left-block4-title-2-row-engin"></div>
                  <p className="myproduct-left-block4-title-2-row-text">
                    0 ????nh gi??
                  </p>
                </div>
                <div className="myproduct-left-block4-title-2-row">
                  <p className="myproduct-left-block4-title-2-row-text">1</p>
                  <i className="fas fa-star myproduct-left-block4-title-2-row-icon"></i>
                  <div className="myproduct-left-block4-title-2-row-engin"></div>
                  <p className="myproduct-left-block4-title-2-row-text">
                    0 ????nh gi??
                  </p>
                </div>
              </div>
            </div>
            <div className="myproduct-left-block4-share">
              <div className="myproduct-left-block4-share-content">
                ????nh gi?? c???a b???n v??? s???n ph???m
              </div>
              <div className="myproduct-left-block4-share-box">
                <div className="fas fa-star myproduct-left-block4-share-box-icon"></div>
                <p className="myproduct-left-block4-share-box-text">
                  Kh??ng th??ch
                </p>
              </div>
              <div className="myproduct-left-block4-share-box">
                <div className="fas fa-star myproduct-left-block4-share-box-icon"></div>
                <p className="myproduct-left-block4-share-box-text">T???m ???????c</p>
              </div>
              <div className="myproduct-left-block4-share-box">
                <div className="fas fa-star myproduct-left-block4-share-box-icon"></div>
                <p className="myproduct-left-block4-share-box-text">
                  B??nh th?????ng
                </p>
              </div>
              <div className="myproduct-left-block4-share-box">
                <div className="fas fa-star myproduct-left-block4-share-box-icon"></div>
                <p className="myproduct-left-block4-share-box-text">H??i l??ng</p>
              </div>
              <div className="myproduct-left-block4-share-box">
                <div className="fas fa-star myproduct-left-block4-share-box-icon"></div>
                <p className="myproduct-left-block4-share-box-text">
                  Tuy???t v???i
                </p>
              </div>
            </div>
            <div className="myproduct-left-block4-comment">
              <p className="myproduct-left-block4-comment-title">
                B???n ??ang b??n kho??n c???n t?? v???n? Vui l??ng ????? l???i s??? ??i???n tho???i
                ho???c l???i nh???n. Ch??ng t??i s??? li??n h??? tr??? l???i b???n s???m nh???t
              </p>
              <div className="myproduct-left-block4-comment-a">
                <textarea
                  placeholder="Nh???p c??u h???i/ b??nh lu???n / nh???n x??t t???i ????y ..."
                  type="text"
                  className="myproduct-left-block4-comment-a-textarea"
                ></textarea>
                <div className="myproduct-left-block4-comment-a-button">
                  <i className="fas fa-camera myproduct-left-block4-comment-a-button-icon"></i>
                  <span className="myproduct-left-block4-comment-a-button-text">
                    G???i ???nh
                  </span>
                </div>
              </div>
              <div className="myproduct-left-block4-comment-b">
                <input
                  type={"text"}
                  placeholder="Nh???p t??n c???a b???n"
                  className="myproduct-left-block4-comment-b-input"
                ></input>
                <button className="myproduct-left-block4-comment-b-btn">
                  G???i ????nh gi??
                </button>
              </div>
            </div>
          </div>
          <div className="myproduct-left-block2">
            <div className="title">
              <div className="title-wall"></div>
              <h2 className="title-text">S???N PH???M C??NG TH????NG HI???U</h2>
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
                          {item.price_new}??
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
                        {item.price_old}??
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
            <p className="myproduct-right-block1-title">Th??ng tin h???u ??ch</p>
            <ul>
              <li className="myproduct-right-block1-li">
                <i className="myproduct-right-block1-li-icon fas fa-angle-right"></i>
                <p className="myproduct-right-block1-li-p">
                  Trung t??m b???o h??nh
                </p>
              </li>
              <li className="myproduct-right-block1-li">
                <i className="myproduct-right-block1-li-icon fas fa-angle-right"></i>
                <p className="myproduct-right-block1-li-p">
                  H?????ng d???n v???n chuy???n
                </p>
              </li>
              <li className="myproduct-right-block1-li">
                <i className="myproduct-right-block1-li-icon fas fa-angle-right"></i>
                <p className="myproduct-right-block1-li-p">
                  H?????ng d???n thanh to??n
                </p>
              </li>
            </ul>
          </div>
          <div className="myproduct-right-block1">
            <p className="myproduct-right-block1-title">Chat v???i ch??ng t??i</p>
            <div className="myproduct-right-block1-btn">
              <div className="myproduct-right-block1-btn-img"></div>
              <div className="myproduct-right-block1-btn-img"></div>
            </div>
          </div>
          <div className="myproduct-right-block2">
            <p className="myproduct-right-block2-line">
              <span className="myproduct-right-block2-line-title">H?? N???i:</span>{" "}
              S??? 30 Ph???m V??n ?????ng - Qu???n C???u Gi???y - H?? N???i
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
                ??i???n tho???i:
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
              S??? 238 Ho??ng Hoa Th??m P.12. Q.T??n B??nh, Tp.HCM
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
                ??i???n tho???i:
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
          <div className="myproduct-right-block3">
            <p className="myproduct-right-block3-title">H??? tr??? tr???c tuy???n</p>
            <div className="myproduct-right-block3-item">
              <p className="myproduct-right-block3-item-title">
                Kinh doanh d??? ??n: 0987 667 577
              </p>
              <div className="myproduct-right-block3-item-social">
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
              </div>
            </div>
            <div className="myproduct-right-block3-item">
              <p className="myproduct-right-block3-item-title">
                Kinh doanh d??? ??n: 0987 667 577
              </p>
              <div className="myproduct-right-block3-item-social">
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
              </div>
            </div>
            <div className="myproduct-right-block3-item">
              <p className="myproduct-right-block3-item-title">
                Kinh doanh d??? ??n: 0987 667 577
              </p>
              <div className="myproduct-right-block3-item-social">
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
              </div>
            </div>
            <div className="myproduct-right-block3-item">
              <p className="myproduct-right-block3-item-title">
                Kinh doanh d??? ??n: 0987 667 577
              </p>
              <div className="myproduct-right-block3-item-social">
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
              </div>
            </div>
            <div className="myproduct-right-block3-item">
              <p className="myproduct-right-block3-item-title">
                Kinh doanh d??? ??n: 0987 667 577
              </p>
              <div className="myproduct-right-block3-item-social">
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
              </div>
            </div>
            <div className="myproduct-right-block3-item">
              <p className="myproduct-right-block3-item-title">
                Kinh doanh d??? ??n: 0987 667 577
              </p>
              <div className="myproduct-right-block3-item-social">
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
              </div>
            </div>
            <div className="myproduct-right-block3-item">
              <p className="myproduct-right-block3-item-title">
                Kinh doanh d??? ??n: 0987 667 577
              </p>
              <div className="myproduct-right-block3-item-social">
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
              </div>
            </div>
            <div className="myproduct-right-block3-item">
              <p className="myproduct-right-block3-item-title">
                Kinh doanh d??? ??n: 0987 667 577
              </p>
              <div className="myproduct-right-block3-item-social">
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
              </div>
            </div>
            <div className="myproduct-right-block3-item">
              <p className="myproduct-right-block3-item-title">
                Kinh doanh d??? ??n: 0987 667 577
              </p>
              <div className="myproduct-right-block3-item-social">
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
              </div>
            </div>
            <div className="myproduct-right-block3-item">
              <p className="myproduct-right-block3-item-title">
                Kinh doanh d??? ??n: 0987 667 577
              </p>
              <div className="myproduct-right-block3-item-social">
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
              </div>
            </div>
            <div className="myproduct-right-block3-item">
              <p className="myproduct-right-block3-item-title">
                Kinh doanh d??? ??n: 0987 667 577
              </p>
              <div className="myproduct-right-block3-item-social">
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
                <div className="myproduct-right-block3-item-social-img"></div>
              </div>
            </div>
          </div>

          <div className="myproduct-right-block4"></div>
        </div>
      </div>
    </Layout>
  );
};

export default MyProduct;
