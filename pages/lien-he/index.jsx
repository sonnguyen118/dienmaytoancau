import React from "react";
import Image from "next/image";
import Layout from "../components/layout";
import ReCAPTCHA from "react-google-recaptcha";

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact">
        <h2 className="contact-title">CÔNG TY CỔ PHẦN ĐIỆN MÁY TOÀN CẦU</h2>
        <div className="contact-block">
          <div className="contact-block-left">
            <p className="contact-block-left-text">
              Showroom: Số 30 Đường Phạm Văn Đồng - Phường Mai Dịch - Quận Cầu
              Giấy - TP Hà Nội (có chỗ độ ô tô rộng rãi)
              <br></br>
              <a className="contact-block-left-text-linkmaps">[Xem bản đồ]</a>
              <br></br>
              VPGD: Số 30 Đường Phạm Văn Đồng - Phường Mai Dịch - Quận Cầu Giấy
              - TP Hà Nội
              <br></br>
              Bán hàng tại kho: 68 Vĩnh Quỳnh- Thanh Trì- Hà Nội (đối diện nghĩa
              trang Văn Điển)
              <br></br>
              Hotline: 0987 667 577 - 0969 563 389
              <br></br>
              <br></br>
              Chi nhánh TP.HCM: Số 238 Đường Hoàng Hoa Thám- P.12- Q.Tân Bình-
              TP.HCM
              <br></br>
              <a className="contact-block-left-text-linkmaps">[Xem bản đồ]</a>
              <br></br>
              Hotline: 0938 385 333 - 0987 667 577
              <br></br>
              <br></br>
              Chi nhánh TP.HCM: Số 238 Đường Hoàng Hoa Thám- P.12- Q.Tân Bình-
              TP.HCM
              <br></br>
              <a className="contact-block-left-text-linkmaps">[Xem bản đồ]</a>
              <br></br>
              Hotline: 0938 385 333 - 0987 667 577
              <br></br>
              <br></br>
              Chi nhánh TP.HCM: Số 238 Đường Hoàng Hoa Thám- P.12- Q.Tân Bình-
              TP.HCM
              <br></br>
              <a className="contact-block-left-text-linkmaps">[Xem bản đồ]</a>
              <br></br>
              Hotline: 0938 385 333 - 0987 667 577
              <br></br>
              <br></br>
              VĂN PHÒNG GIAO DỊCH: Số 30 Đường Phạm Văn Đồng- Phường Mai Dịch-
              Quận Cầu Giấy- Tp Hà Nội
              <br></br>
              <a className="contact-block-left-text-linkmaps">[Xem bản đồ]</a>
              <br></br>
              Hotline: 0938 385 333 - 0987 667 577
              <br></br>
              Hotline: 0938 385 333 - 0987 667 577
              <br></br>
              Email: khodienmay@gmail.com / dienmaytoancau68@gmail.com
            </p>
          </div>
          <div className="contact-block-right">
            <p className="contact-block-right-title">
              Mời bạn điền vào mẫu thư liên lạc và gửi đi cho chúng tôi. Các
              chuyên viên tư vấn của chúng tôi sẽ trả lời bạn trong thời gian
              sớm nhất.
            </p>
            <form className="contact-block-right-form">
              <div className="contact-block-right-form-box">
                <input
                  type="text"
                  placeholder="Họ và Tên"
                  className="contact-block-right-form-box-input"
                ></input>
                <input
                  type="text"
                  placeholder="Điện thoại"
                  className="contact-block-right-form-box-input"
                ></input>
              </div>
              <input
                type="text"
                placeholder="Email"
                className="contact-block-right-form-input"
              ></input>
              <input
                type="text"
                placeholder="Tiêu đề thư"
                className="contact-block-right-form-input"
              ></input>
              <textarea
                type="text"
                placeholder="Nội dung"
                className="contact-block-right-form-textarea"
              ></textarea>
              <ReCAPTCHA
                size="normal"
                sitekey="6LdJWSMhAAAAAPaN32qE11VJwISjT-PaptRIFuW9"
              />

              <button className="contact-block-right-form-btn">GỬI ĐI</button>
            </form>
          </div>
        </div>

        <div className="contact-googlemaps">
          <Image
            src={`/components/map.png`}
            alt="Điện Máy Toàn Cầu"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
