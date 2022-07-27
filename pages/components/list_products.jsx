import React from "react";
import Image from "next/image";

const ListProducts = () => {
  const Ttitle_Product = [
    "Máy rửa xe",
    "Máy nông nghiệp",
    "Máy bơm nước",
    "Máy cắt các loại",
    "Máy xây dựng",
    "Máy đánh giày",
    "Máy uốn sắt",
    "Máy mài",
    "Xe đẩy hàng",
    "Dụng cụ đa năng",
    "Máy hàn điện tử",
    "Máy cắt sắt",
    "Máy cắt đa năng",
    "Máy cắt gạch, cắt đá",
  ];
  return (
    <div className="list_products">
      {Ttitle_Product.map((title, i) => (
        <>
          <div className="list_products-item">
            <div className="list_products-item-title">
              <div className="list_products-item-title-icon">
                <Image
                  src={`/components/arrow.png`}
                  alt="Điện Máy Toàn Cầu"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <p className="list_products-item-title-text">{title}</p>
            </div>
            <i className="fa fa-angle-right list_products-item-icon"></i>
          </div>
        </>
      ))}
    </div>
  );
};

export default ListProducts;
