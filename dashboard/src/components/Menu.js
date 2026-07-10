import { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };

  const handlePofileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" width="40" />

      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
              className={selectedMenu===0 ? activeMenuClass : menuClass}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Orders"
              onClick={() => handleMenuClick(1)}
              className={selectedMenu===1 ? activeMenuClass : menuClass}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Holdings"
              onClick={() => handleMenuClick(2)}
              className={selectedMenu===2 ? activeMenuClass : menuClass}
            >
              Holdings
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Positions"
              onClick={() => handleMenuClick(3)}
              className={selectedMenu===3 ? activeMenuClass : menuClass}
            >
              Positions
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Funds"
              onClick={() => handleMenuClick(4)}
              className={selectedMenu===4 ? activeMenuClass : menuClass}
            >
              Funds
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(6)}
              className={selectedMenu===6 ? activeMenuClass : menuClass}
            >
             Apps
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handlePofileClick}>
          <div className="avatar">ZU</div>
          <div className="username">User</div>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;
