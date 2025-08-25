import React from "react";
import "./Header.css";
import logo from "../../assets/images/Netflix-logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div>
      <div className="header-outer-container">
        <div className="header_container">
          <div className="header-left">
            <ul>
              <img
                src={logo}
                alt="Netflix Logo"
                width={100}
                className="header-logo"
              />
              <li>Netflix</li>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header-right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
