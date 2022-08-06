import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import Link from "next/link";

const Carts = () => {
  // const [value, setValue] = useState();
  // useEffect =
  //   (() => {
  //     // var i = 0;
  //     // for (i = 0; i <= dataCarts.length; i++) {
  //     //   const CountSelect = $("#1);
  //     // }
  //     // console.log(CountSelect);
  //   },
  //   []);
  const handleDelete = () => {
    console.log("vãi");
    // useEffect =
    //   (() => {
    //     console.log(index);
    //   },
    //   []);
  };
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
  const dataCarts = [
    {
      title_products: "Máy cân bằng laser RUBYQ 16 tia xanh RB616",
      image_products: "/components/carts_test.jpg",
      state: "Còn hàng",
      old_price: 2800000,
      new_price: 1950000,
      count: 1,
    },
    {
      title_products: "Máy cân bằng laser RUBYQ 19 tia xanh RB616",
      image_products: "/components/carts_test.jpg",
      state: "Còn hàng",
      old_price: 2900000,
      new_price: 1000000,
      count: 2,
    },
  ];
  return (
    <Layout>
      <div className="cart">
        <div className="cart-title">
          <Link href={"/"}>
            <a>
              <span className="cart-title-title">Trang chủ</span>
            </a>
          </Link>
          <i className="cart-title-icon fas fa-angle-double-right"></i>
          <span className="cart-title-item">Giỏ hàng</span>
        </div>
        <div className="cart-box">
          <form className="cart-box-1">
            <div className="cart-box-1-title">Thông tin mua hàng</div>
            <div className="cart-box-1-infor">
              <div className="cart-box-1-infor-group">
                <label className="cart-box-1-infor-label">Họ và tên</label>
                <label className="cart-box-1-infor-label">Số điện thoại</label>
                <label className="cart-box-1-infor-label">Email</label>
                <label className="cart-box-1-infor-label">Địa chỉ</label>
              </div>
              <div className="cart-box-1-infor-group-input">
                <input className="cart-box-1-infor-input"></input>
                <input className="cart-box-1-infor-input"></input>
                <input className="cart-box-1-infor-input"></input>
                <textarea className="cart-box-1-infor-input-textarea"></textarea>
              </div>
            </div>
            <div>
              <input
                className="products__left-filter-block-group-btn cart-box-1-infor-checkbox"
                type="checkbox"
                name="my-checkbox"
                id=""
              />
              <label className="cart-box-1-infor-label-text">
                Yêu cầu{" "}
                <span className="cart-box-1-infor-label-hightlight">
                  Điện Máy Toàn Cầu
                </span>{" "}
                xuất hóa đơn cho công ty hoặc tổ chức.
              </label>
            </div>

            <div className="cart-box-1-title">Chọn hình thức thanh toán</div>
            <div className="cart-box-1-group">
              <div className="cart-box-1-group-select">
                <input
                  type="radio"
                  id="huey"
                  name="payments"
                  value="huey"
                  checked
                  className="cart-box-1-group-select-icon"
                />
                <label className="cart-box-1-group-select-label" htmlFor="huey">
                  Giao hàng và thu tiền tại nhà
                </label>
              </div>
              <div className="cart-box-1-group-select">
                <input
                  type="radio"
                  id=""
                  name="payments"
                  value="dewey"
                  className="cart-box-1-group-select-icon"
                />
                <label htmlFor="" className="cart-box-1-group-select-label">
                  Nhận hàng và thanh toán tại Điện Máy Toàn Cầu
                </label>
              </div>
              <div className="cart-box-1-group-select">
                <input
                  type="radio"
                  id=""
                  name="payments"
                  value="dewey"
                  className="cart-box-1-group-select-icon"
                />
                <label htmlFor="" className="cart-box-1-group-select-label">
                  Chuyển khoản qua ngân hàng và ATM
                </label>
              </div>
            </div>
            <div className="cart-box-1-title">
              Thời gian nhận hàng mong muốn
            </div>
            <div className="cart-box-1-group">
              <div className="cart-box-1-group-select">
                <input
                  type="radio"
                  id="huey"
                  name="delivery_time"
                  value="huey"
                  checked
                  className="cart-box-1-group-select-icon"
                />
                <label htmlFor="huey" className="cart-box-1-group-select-label">
                  Thời gian bất kì trong ngày
                </label>
              </div>
              <div className="cart-box-1-group-select">
                <input
                  type="radio"
                  id=""
                  name="delivery_time"
                  value="dewey"
                  className="cart-box-1-group-select-icon"
                />
                <label htmlFor="" className="cart-box-1-group-select-label">
                  Trong giờ hành chính
                </label>
              </div>
              <div className="cart-box-1-group-select">
                <input
                  type="radio"
                  id=""
                  name="delivery_time"
                  value="dewey"
                  className="cart-box-1-group-select-icon"
                />
                <label htmlFor="" className="cart-box-1-group-select-label">
                  Ngoài giờ hành chính
                </label>
              </div>
              <div className="cart-box-1-group-select">
                <input
                  type="radio"
                  id=""
                  name="delivery_time"
                  value="dewey"
                  className="cart-box-1-group-select-icon"
                />
                <label htmlFor="" className="cart-box-1-group-select-label">
                  Thời gian khác
                </label>
              </div>
            </div>

            <div className="cart-box-1-footer">
              <button className="cart-box-1-footer-btn">Gửi đơn hàng</button>
            </div>
          </form>
          <div className="cart-box-2">
            <div className="cart-box-1-title">Đơn hàng (2 sản phẩm)</div>
            <tr className="cart-box-2-header">
              <td className="cart-box-2-header-td">Sản phẩm</td>
              <td className="cart-box-2-header-td"></td>
              <td className="cart-box-2-header-td">số lượng</td>
              <td className="cart-box-2-header-td">Đơn giá</td>
              <td className="cart-box-2-header-td">thành tiền</td>
              <td className="cart-box-2-header-td"></td>
            </tr>
            {dataCarts?.map((data, index) => (
              <>
                <tr className="cart-box-2-main">
                  <td className="cart-box-2-main-td">
                    <div
                      className="cart-box-2-main-td-img"
                      style={{
                        backgroundImage: `url(${data?.image_products})`,
                      }}
                    ></div>
                  </td>
                  <td className="cart-box-2-main-td">
                    <p className="cart-box-2-main-td-title">
                      {data?.title_products}
                    </p>
                    <p className="cart-box-2-main-td-sub">{data?.state}</p>
                  </td>
                  <td className="cart-box-2-main-td">
                    <p className="cart-box-2-main-td-count">{data?.count}</p>
                  </td>
                  <td className="cart-box-2-main-td">
                    <p className="cart-box-2-main-td-old-price">
                      {data?.old_price.toLocaleString()}đ
                    </p>
                    <p className="cart-box-2-main-td-new-price">
                      {data?.new_price.toLocaleString()}đ
                    </p>
                    <div className="cart-box-2-main-td-state">
                      <p className="myproduct-left-block1-infor-price-choose-count">
                        Giảm{" "}
                        {(
                          ((data?.old_price - data?.new_price) /
                            data?.old_price) *
                          100
                        ).toFixed()}
                        %
                      </p>
                    </div>
                  </td>
                  <td className="cart-box-2-main-td">
                    {(data.new_price * data.count).toLocaleString()}đ
                  </td>
                  <td className="cart-box-2-main-td">
                    <i
                      className="fas fa-trash-alt"
                      onClick={handleDelete()}
                    ></i>
                  </td>
                </tr>
              </>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Carts;
