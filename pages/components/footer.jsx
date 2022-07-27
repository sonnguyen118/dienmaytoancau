import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wall"></div>
      <div className="footer-main">
        <div className="footer-main-about">
          <div className="footer-main-about-img">
            <Image
              src={`/logo_blue.png`}
              alt="Điện Máy Toàn Cầu"
              layout="fill"
              data-testid="close-icon"
              objectFit="contain"
            />
          </div>
          <p className="footer-main-about-text">
            VPGD: Số 30 Đường Phạm Văn Đồng-Phường Mai Dịch-Quận Cầu Giấy-HN
          </p>
          <div className="footer-main-about-call">
            <p className="footer-main-about-call-text">
              Gọi mua hàng (8h30-21:00)
            </p>
            <p className="footer-main-about-call-number">0123.456.789</p>
          </div>
          <div className="footer-main-about-call">
            <p className="footer-main-about-call-text">
              Gọi khiếu nại (8h30-21:00)
            </p>
            <p className="footer-main-about-call-number">0123.456.789</p>
          </div>
          <p className="footer-main-about-text">Email: demo@gmail.com</p>
          <p className="footer-main-about-text">Website: www.demo.com</p>
          <p className="footer-main-about-text">Nghỉ chiều Thứ 7 và Chủ nhật</p>
        </div>
        <div className="footer-main-menu">
          <div className="footer-main-menu-menu">
            <ul className="footer-main-menu-menu-block">
              <li className="footer-main-menu-menu-block-title">
                Thông tin công ty
              </li>
              <li className="footer-main-menu-menu-block-text">
                Giới thiệu công ty
              </li>
              <li className="footer-main-menu-menu-block-text">Liên hệ</li>
              <li className="footer-main-menu-menu-block-text">
                Xem hệ thống cửa hàng
              </li>
              <li className="footer-main-menu-menu-block-text">
                Đối tác của chúng tôi
              </li>
            </ul>
            <ul className="footer-main-menu-menu-block">
              <li className="footer-main-menu-menu-block-title">
                Thông tin công ty
              </li>
              <li className="footer-main-menu-menu-block-text">
                Giới thiệu công ty
              </li>
              <li className="footer-main-menu-menu-block-text">Liên hệ</li>
              <li className="footer-main-menu-menu-block-text">
                Xem hệ thống cửa hàng
              </li>
              <li className="footer-main-menu-menu-block-text">
                Đối tác của chúng tôi
              </li>
            </ul>
            <ul className="footer-main-menu-menu-block">
              <li className="footer-main-menu-menu-block-title">
                Thông tin công ty
              </li>
              <li className="footer-main-menu-menu-block-text">
                Giới thiệu công ty
              </li>
              <li className="footer-main-menu-menu-block-text">Liên hệ</li>
              <li className="footer-main-menu-menu-block-text">
                Xem hệ thống cửa hàng
              </li>
              <li className="footer-main-menu-menu-block-text">
                Đối tác của chúng tôi
              </li>
            </ul>
          </div>
          <div className="footer-main-menu-social">
            <p className="footer-main-menu-social-text">Mạng xã hội</p>
            <div className="footer-main-menu-social-group">
              <div className="footer-main-menu-social-group-img">
                <Image
                  src={`/footer/facebook-logo.png`}
                  alt="Facebook Điện Máy Toàn Cầu"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <div className="footer-main-menu-social-group-img">
                <Image
                  src={`/footer/twiter-logo.png`}
                  alt="Twiter Điện Máy Toàn Cầu"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <div className="footer-main-menu-social-group-img">
                <Image
                  src={`/footer/google-logo.png`}
                  alt="Google + Điện Máy Toàn Cầu"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <div className="footer-main-menu-social-group-img">
                <Image
                  src={`/footer/linkid-logo.png`}
                  alt="LinkID Điện Máy Toàn Cầu"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <div className="footer-main-menu-social-group-img">
                <Image
                  src={`/footer/youtube-logo.png`}
                  alt="Youtube Điện Máy Toàn Cầu"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <div className="footer-main-menu-certificate">
            <p className="footer-main-menu-certificate-text">
              Mã số doanh nghiệp 0107968516 do Sở Kế hoạch Đầu tư Hà Nội cấp lần
              1 ngày 18/09/2017
            </p>
            <div className="footer-main-menu-certificate-group">
              <div className="footer-main-menu-certificate-group-1">
                <div className="footer-main-menu-certificate-group-1-img">
                  <Image
                    src={`/footer/bank_1.png`}
                    alt="Điện Máy Toàn Cầu"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
                <div className="footer-main-menu-certificate-group-1-img">
                  <Image
                    src={`/footer/bank_2.png`}
                    alt="Điện Máy Toàn Cầu"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
                <div className="footer-main-menu-certificate-group-1-img">
                  <Image
                    src={`/footer/bank_3.png`}
                    alt="Điện Máy Toàn Cầu"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
                <div className="footer-main-menu-certificate-group-1-img">
                  <Image
                    src={`/footer/bank_4.png`}
                    alt="Điện Máy Toàn Cầu"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
                <div className="footer-main-menu-certificate-group-1-img">
                  <Image
                    src={`/footer/bank_5.png`}
                    alt="Điện Máy Toàn Cầu"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
                <div className="footer-main-menu-certificate-group-1-img">
                  <Image
                    src={`/footer/bank_6.png`}
                    alt="Điện Máy Toàn Cầu"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="footer-main-menu-certificate-group-2">
                <div className="footer-main-menu-certificate-group-2-img1">
                  <Image
                    src={`/footer/Bo_cong_thuong.png`}
                    alt="Điện Máy Toàn Cầu"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
                <div className="footer-main-menu-certificate-group-2-img2">
                  <Image
                    src={`/footer/DMCA.png`}
                    alt="Điện Máy Toàn Cầu"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
