import React, { useState } from "react";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { TCDoughnut } from "../../src/components/partials/charts/analytics/AnalyticsCharts";
import { PreviewCard } from "../components/Component";

const DoughnutPieChart = () => {
  const [traffic, setTraffic] = useState("30");
  return (
    <React.Fragment>
      {" "}
      <div className="card-title-group">
        <div className="card-title card-title-sm">
          <h4>Doughnut Chart</h4>
        </div>
        <UncontrolledDropdown>
          <DropdownToggle className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white">
            {traffic} Days
          </DropdownToggle>
          <DropdownMenu end className="dropdown-menu-xs">
            <ul className="link-list-opt no-bdr">
              <li className={traffic === "7" ? "active" : ""}>
                <DropdownItem
                  href="#dropdownitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setTraffic("7");
                  }}
                >
                  <span>7 Days</span>
                </DropdownItem>
              </li>
              <li className={traffic === "15" ? "active" : ""}>
                <DropdownItem
                  href="#dropdownitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setTraffic("15");
                  }}
                >
                  <span>15 Days</span>
                </DropdownItem>
              </li>
              <li className={traffic === "30" ? "active" : ""}>
                <DropdownItem
                  href="#dropdownitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setTraffic("30");
                  }}
                >
                  <span>30 Days</span>
                </DropdownItem>
              </li>
            </ul>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <br />
      <PreviewCard>
        <div className="traffic-channel">
          <div className="traffic-channel-doughnut-ck">
            <TCDoughnut state={traffic} className="analytics-doughnut"></TCDoughnut>
          </div>

          <div className="traffic-channel-group g-2">
            <div className="traffic-channel-data">
              <div className="title">
                <span className="dot dot-lg sq" style={{ background: "#FFA500" }}></span>
                <span>Male</span>
              </div>
              <div className="amount">
                {traffic === "7" ? "3,055" : traffic === "15" ? "2500" : "2300"} <small>40%</small>
              </div>
            </div>

            <div className="traffic-channel-data">
              <div className="title">
                <span className="dot dot-lg sq" style={{ background: "#1907e0" }}></span>
                <span>Female</span>
              </div>
              <div className="amount">
                {traffic === "7" ? "259" : traffic === "15" ? "1,059" : "1509"} <small>35%</small>
              </div>
            </div>

            <div className="traffic-channel-data">
              <div className="title">
                <span className="dot dot-lg sq" style={{ background: "#000000" }}></span>
                <span>Others</span>
              </div>
              <div className="amount">
                {traffic === "7" ? "438" : traffic === "15" ? "482" : "882"} <small>25%</small>
              </div>
            </div>
          </div>
        </div>
      </PreviewCard>
      <br />
    </React.Fragment>
  );
};

export default DoughnutPieChart;
