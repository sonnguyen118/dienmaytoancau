import React from "react";
import Image from "next/image";

const ListProducts = () => {
  const Ttitle_Product = [
    {
      menu_1: "Máy rửa xe",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Máy nông nghiệp",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Máy bơm nước",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Máy cắt các loại",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Máy xây dựng",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Máy đánh giày",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Máy uốn sắt",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Máy mài",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Xe đẩy hàng",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Dụng cụ đa năng",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Máy hàn điện tử",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Máy cắt sắt",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Máy cắt đa năng",
      menu_2: [
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
      ],
    },
    {
      menu_1: "Máy cắt gạch, cắt đá",
      menu_2: [
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
      ],
    },
  ];
  return (
    <div className="list_products">
      {Ttitle_Product.map((title, index) => (
        <>
          <div className="list_products-menu">
            <div className="list_products-item">
              <div className="list_products-item-title">
                <div className="list_products-item-title-icon"></div>
                <p className="list_products-item-title-text">{title.menu_1}</p>
              </div>
              <i className="fa fa-angle-right list_products-item-icon"></i>
            </div>
            <div className="list_products-submenu">
              <div className="list_products-submenu-block">
                {title.menu_2.map((i) => (
                  <>
                    <p className="list_products-submenu-block-item">{i}</p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ListProducts;
