import React from "react";

const Products = () => {
  const Products = [
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
    {
      image: "/components/category/test.jpg",
      title: "Máy lọc nước siệu sịn nhé các bạn ơi",
      new_price: "2.000.000",
      old_price: "9.800.000",
      total: 290,
      count: 50,
    },
  ];
  return (
    <div className="listproducts">
      {Products.map((products, index) => (
        <>
          <div className="listproducts-item">
            <div
              className="listproducts-item-img"
              style={{ backgroundImage: `url(${products.image})` }}
            ></div>
            <div className="listproducts-item-infor">
              <div className="listproducts-item-infor-title">
                {products.title}
              </div>
              <div className="listproducts-item-infor-price">
                {products.new_price}đ
              </div>
              <div className="listproducts-item-infor-social">
                <div className="listproducts-item-infor-social-price">
                  {products.old_price}đ
                </div>
                <div className="home__block5-slider-item-infor-social">
                  <i className="fas fa-star home__block5-slider-item-infor-social-icon"></i>
                  <i className="fas fa-star home__block5-slider-item-infor-social-icon"></i>
                  <i className="fas fa-star home__block5-slider-item-infor-social-icon"></i>
                  <i className="fas fa-star home__block5-slider-item-infor-social-icon"></i>
                  <i className="fas fa-star home__block5-slider-item-infor-social-icon"></i>
                  <span className="home__block5-slider-item-infor-social-text">
                    ({products.total})
                  </span>
                </div>
              </div>
            </div>
            <div className="listproducts-item-sub">-{products.count}%</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Products;
