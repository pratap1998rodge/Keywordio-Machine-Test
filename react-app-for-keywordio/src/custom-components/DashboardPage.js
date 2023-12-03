import React from "react";
import { Block, PreviewAltCard } from "../components/Component";
import { Col, Row } from "reactstrap";
import AdsDataTable from "./AdsDataTable";
import DoughnutPieChart from "./DoughnutPieChart";

const DashboardPage = () => {
  return (
    <div>
      {/* <Block> */}
      <Row className="g-gs">
        <Col lg="7" xxl="6">
          <PreviewAltCard className="h-100 card-bordered">
            <AdsDataTable />
          </PreviewAltCard>
        </Col>

        <Col md="6" xxl="6">
          <PreviewAltCard className="h-80 card-bordered" bodyClass="h-100 stretch flex-column">
            <DoughnutPieChart />
          </PreviewAltCard>
        </Col>
      </Row>
      {/* </Block> */}
    </div>
  );
};

export default DashboardPage;
