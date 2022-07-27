import React from "react";
import Image from "next/image";
import Layout from "../components/layout";
// import Recaptcha from "react-recaptcha";
// import reCAPTCHA from "react-google-recaptcha";
// import ReCAPTCHA from "https://cdn.skypack.dev/react-google-recaptcha@2.1.0";

const ContactPage = () => {
  const testSiteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

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
                  placeholder=""
                  className="contact-block-right-form-box-input"
                ></input>
                <input
                  type="text"
                  placeholder=""
                  className="contact-block-right-form-box-input"
                ></input>
              </div>
              <input
                type="text"
                placeholder=""
                className="contact-block-right-form-input"
              ></input>
              <input
                type="text"
                placeholder=""
                className="contact-block-right-form-input"
              ></input>
              <textarea
                type="text"
                placeholder=""
                className="contact-block-right-form-textarea"
              ></textarea>
              {/* <Recaptcha
                sitekey="6LdJWSMhAAAAAPaN32qE11VJwISjT-PaptRIFuW9"
                render="explicit"
                verifyCallback={verifyCallback}
                onloadCallback={callback}
              /> */}
              <div className="contact-block-right-form-recapcha">
                <div
                  className="g-recaptcha"
                  data-callback="recaptchaCallback"
                  data-sitekey="6LdJWSMhAAAAAPaN32qE11VJwISjT-PaptRIFuW9"
                ></div>
              </div>

              <btn className="contact-block-right-form">GỬI ĐI</btn>
            </form>
          </div>
        </div>

        <div className="contact-googlemaps"></div>
      </div>
    </Layout>
  );
};

export default ContactPage;
