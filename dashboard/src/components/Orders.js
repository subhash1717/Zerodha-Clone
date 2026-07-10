import React from "react";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <div className="icon">📄</div>
        <p>You have no orders</p>
        <a href="/" className="btn">Explore</a>
      </div>
    </div>
  );
};

export default Orders;
