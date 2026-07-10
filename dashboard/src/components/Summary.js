import React from "react";

const Summary = () => {
  return (
    <div className="username">
      <h6>Hello User</h6>
      <div className="row">
        <div className="col">
          <h5>₹0 <span>Equity</span></h5>
          <p>Available margin</p>
        </div>
        <div className="col">
          <h5>₹0 <span>Commodity</span></h5>
          <p>Available margin</p>
        </div>
        <div className="col">
          <h5>₹0</h5>
          <p>Day's P&L</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
