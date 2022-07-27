import React from "react";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination-pre">
        <i className="fas fa-angle-left pagination-pre-icon"></i>
      </div>
      <div className="pagination-number pagination-activate">1</div>
      <div className="pagination-number">2</div>
      <div className="pagination-number">3</div>
      <div className="pagination-number">4</div>
      <div className="pagination-number">5</div>
      <div className="pagination-next">
        <i className="fas fa-angle-right pagination-next-icon"></i>
      </div>
      <div className="pagination-super-next">
        <i className="fas fa-angle-double-right pagination-super-next-icon"></i>
      </div>
    </div>
  );
};

export default Pagination;
