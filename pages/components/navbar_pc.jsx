import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarPC = () => {
  return (
    <div className="navbarpc">
      <div className="navbarpc-top">
        <h5 className="navbarpc-top-text">
          Chào mừng quý khách đến với Điện máy toàn cầu
        </h5>
        <div className="navbarpc-top-contact">
          <div className="navbarpc-top-contact-group">
            <i className="fas fa-phone-volume navbarpc-top-contact-group-icon"></i>
            <p className="navbarpc-top-contact-group-text">
              Hotline: 0123.456.789
            </p>
            <i className="fas fa-envelope navbarpc-top-contact-group-icon"></i>
            <p className="navbarpc-top-contact-group-text">
              Email: demo@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="navbarpc-main">
        <div className="navbarpc-main-logo">
          <Image
            src={`/logo_white.png`}
            alt="Điện Máy Toàn Cầu"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
        <form className="navbarpc-main-search">
          <input
            className="navbarpc-main-search-input"
            placeholder="Tìm kiếm"
          />
          <div className="navbarpc-main-search-btn">
            <i className="fas fa-search navbarpc-main-search-btn-icon" />
          </div>
        </form>
        <div className="navbarpc-main-cart">
          <i className="fas fa-shopping-cart navbarpc-main-cart-icon"></i>
          <p className="navbarpc-main-cart-text">Giỏ hàng</p>
          <div className="navbarpc-main-cart-sudo">20</div>
        </div>
      </div>
      <div className="navbarpc-menu">
        <div className="navbarpc-menu-group">
          <i className="fas fa-bars navbarpc-menu-group-icon"></i>
          <h2 className="navbarpc-menu-text">DANH MỤC SẢN PHẨM</h2>
        </div>
        <Link href={"/"}>
          <a className="navbarpc-menu-text">TRANG CHỦ</a>
        </Link>

        <Link href={"/gioi-thieu"}>
          <a className="navbarpc-menu-text">GIỚI THIỆU</a>
        </Link>

        <Link href={"/san-pham"}>
          <a className="navbarpc-menu-text">SẢN PHẨM</a>
        </Link>

        <Link href={"/tin-tuc"}>
          <a className="navbarpc-menu-text">TIN TỨC</a>
        </Link>

        <Link href={"/lien-he"}>
          <a className="navbarpc-menu-text">LIÊN HỆ</a>
        </Link>
      </div>
    </div>
  );
};

export default NavbarPC;
