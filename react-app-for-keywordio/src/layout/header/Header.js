import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { useTheme, useThemeUpdate } from "../provider/Theme";
import { Icon } from "../../components/Component";

const Header = ({ fixed, className }) => {
  const theme = useTheme();
  const themeUpdate = useThemeUpdate();
  const headerClass = classNames({
    "nk-header": true,
    "nk-header-fixed": fixed,
    [`is-light`]: theme.header === "white",
    [`is-${theme.header}`]: theme.header !== "white" && theme.header !== "light",
    [`${className}`]: className,
  });
  let currentUrl;

  if (window.location.pathname !== undefined) {
    currentUrl = window.location.pathname;
  } else {
    currentUrl = null;
  }
  return (
    <div className={headerClass}>
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-header-menu is-light">
            <div className="nk-header-menu-inner">
              <ul className="nk-menu nk-menu-main">
                <li
                  className={`nk-menu-item ${currentUrl === process.env.PUBLIC_URL + "/" ? "active current-page" : ""}`}
                >
                  <div>
                    <Icon name="table-view" style={{ fontSize: "34px", color: "blue" }}></Icon>
                    <span className="nk-menu-text" style={{ color: "blue", fontSize: "35px" }}>
                      Keywordio
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li>
                <h5>DASHBOARD</h5>
              </li>
              <li>
                <Link to="ads-input-form">
                  <span className="breadcrumb-item-text" style={{ fontSize: "16px", fontWeight: "bold" }}>
                    CREATE ADS
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
