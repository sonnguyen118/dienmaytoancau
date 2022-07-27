import React from "react";

const ListCategory = () => {
  const Category = [
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
    "/components/category/honda.png",
  ];
  return (
    <div className="list-category">
      <div className="list-category-group">
        {Category.map((i) => (
          <>
            <div
              className="list-category-group-item"
              style={{ backgroundImage: `url(${i})` }}
            ></div>
          </>
        ))}
        <div className="list-category-group-last">Xem thêm 10 hãng</div>
      </div>
    </div>
  );
};

export default ListCategory;
