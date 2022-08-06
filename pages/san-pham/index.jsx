import React from "react";
import Image from "next/image";
import Layout from "../components/layout";
import ListProducts from "../components/list_products";
import ListCategory from "../components/products/listcategory";
import Products from "../components/products/products";
import Trademark from "../components/trademark";
import Pagination from "../components/pagination";
import LoadingComponent from "../components/loading/loading_component";
import CounterInput from "react-counter-input";

const ProductsPage = () => {
  const Search = ["Máy chạy thận"];
  return (
    <Layout>
      <div className="products">
        <div className="products__left">
          <div className="products__left-list">
            <ListProducts />
          </div>
          <div className="products__left-filter">
            <div className="products__left-filter-title">
              <i className="products__left-filter-title-icon fas fa-filter"></i>
              <p className="products__left-filter-title-text">
                BỘ LỌC TÌM KIẾM
              </p>
            </div>
            <div className="products__left-filter-block">
              <p className="products__left-filter-block-title">
                Theo Thương Hiệu
              </p>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-add">
                <p className="products__left-filter-block-add-text">Thêm</p>
                <i className="fas fa-angle-down products__left-filter-block-add-icon"></i>
              </div>
            </div>
            <div className="products__left-filter-block">
              <p className="products__left-filter-block-title">
                Theo Thương Hiệu
              </p>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-add">
                <p className="products__left-filter-block-add-text">Thêm</p>
                <i className="fas fa-angle-down products__left-filter-block-add-icon"></i>
              </div>
            </div>
            <div className="products__left-filter-block">
              <p className="products__left-filter-block-title">
                Theo Thương Hiệu
              </p>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-group">
                <input
                  className="products__left-filter-block-group-btn"
                  type="checkbox"
                  name="my-checkbox"
                  id=""
                />
                <label className="products__left-filter-block-group-label">
                  Sunhouse
                  <span className="products__left-filter-block-group-label-sub">
                    (200)
                  </span>
                </label>
              </div>
              <div className="products__left-filter-block-add">
                <p className="products__left-filter-block-add-text">Thêm</p>
                <i className="fas fa-angle-down products__left-filter-block-add-icon"></i>
              </div>
            </div>
            <div className="products__left-filter-block">
              <p className="products__left-filter-block-title">Khoảng Giá</p>
              <div className="products__left-filter-block-price">
                <input
                  type="text"
                  placeholder="đ TỪ"
                  className="products__left-filter-block-price-input"
                ></input>
                <div className="products__left-filter-block-price-space"></div>
                <input
                  type="text"
                  placeholder="đ ĐẾN"
                  className="products__left-filter-block-price-input"
                ></input>
              </div>
              <div className="products__left-filter-block-btn">ÁP DỤNG</div>
            </div>
            <div className="products__left-filter-block">
              <div className="products__left-filter-block-btn">
                XÓA LỰA CHỌN
              </div>
            </div>
          </div>
        </div>
        <div className="products__right">
          <ListCategory />
          <div className="products__right-wrap">
            <div className="products__right-wrap-title">
              Kết quả tìm kiếm cho: {`"`}
              <span className="products__right-wrap-title-span">{Search}</span>
              {`"`}
            </div>
            <div className="products__right-wrap-header">
              <div className="products__right-wrap-header-sort">
                {/* <p className="products__right-wrap-header-sort-text">
                  Sắp xếp theo
                </p> */}
                <btn className="products__right-wrap-header-sort-btn">
                  Bán chạy nhất
                </btn>
                <btn className="products__right-wrap-header-sort-btn">
                  Giá tăng dần
                </btn>
                <btn className="products__right-wrap-header-sort-btn">
                  Giá giảm dần
                </btn>
                <btn className="products__right-wrap-header-sort-btn">
                  Giảm giá
                </btn>
                <btn className="products__right-wrap-header-sort-btn">
                  Mới nhất
                </btn>
              </div>
              <div className="products__right-wrap-header-pagination">
                <div className="products__right-wrap-header-pagination-number">
                  <span className="products__right-wrap-header-pagination-number-1">
                    1
                  </span>
                  /
                  <span className="products__right-wrap-header-pagination-number-2">
                    50
                  </span>
                </div>
                <div className="products__right-wrap-header-pagination-btn">
                  <div className="products__right-wrap-header-pagination-btn-pre">
                    <i className="fas fa-angle-left products__right-wrap-header-pagination-btn-icon-dis"></i>
                  </div>
                  <div className="products__right-wrap-header-pagination-btn-nex">
                    <i className="fas fa-angle-right products__right-wrap-header-pagination-btn-icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Products />
          <LoadingComponent />
          <Pagination />

          <div className="title">
            <div className="title-wallz"></div>
            <h2 className="title-textz">THƯƠNG HIỆU NỔI BẬT</h2>
          </div>
          <div className="products__right-list-category">
            <Trademark />
          </div>
          <div className="products__right-main">
            <div className="title">
              <div className="title-wallz"></div>
              <h2 className="title-textz">MÁY RỬA XE</h2>
            </div>
            <p className="products__right-main-text">
              Đầu cô choáng váng giống như không phải của mình, lòng bàn tay
              chạm vào ga giường sang trọng hoa lệ, không phải đồ cũ mà cô
              thường dùng, đèn trên đỉnh đầu cũng không phải đèn tiets kiệm năng
              lượng cô quen nhìn thấy, trên người cô đau đớn giống như mới vừa
              bị cái gì đó cán qua, nâng cổ tay lên, bên trên toàn là những dấu
              vết xanh xanh tím tím. Lâm Triệt bị ngã choáng váng rất tức giận,
              nhưng lúc ngẩng đầu lên thấy người đàn ông trước mắt, vẫn không
              nhịn được ngẩn người, cặp mắt si mê dán lên gương mặt tuyệt mỹ của
              anh, muốn dời cũng không dời nổi...
              <br></br>Là ai bảo cô tới đây, cô bỏ thuốc tôi? Cô làm ra chuyện
              như vậy, còn có thể nghĩ sẽ rời khỏi nơi này an Anh nhìn người phụ
              nữ ngây ngô này, trong đôi mắt sâu thẳm lóe lên tức giận. Đầu cô
              choáng váng giống như không phải của mình, lòng bàn tay chạm vào
              ga giường sang trọng hoa lệ, không phải đồ cũ mà cô thường dùng,
              đèn trên đỉnh đầu cũng không phải đèn tiets kiệm năng lượng cô
            </p>
            <div className="products__right-main-img">
              <Image
                src={`/components/test_baner_5.jpg`}
                alt="Điện Máy Toàn Cầu"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="products__right-main-seemore">
              <btn className="products__right-main-seemore-btn">
                Hiển thị thêm nội dung
              </btn>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
