import React from "react";
import { Block, BlockHead, BlockHeadContent, BlockTitle, PreviewCard, ReactDataTable } from "../components/Component";
import { DataTableData, dataTableColumns } from "./TableData";

const AdsDataTable = () => {
  return (
    <div>
      <Block size="lg">
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle tag="h4">React DataTable</BlockTitle>
          </BlockHeadContent>
        </BlockHead>

        <PreviewCard>
          <ReactDataTable data={DataTableData} columns={dataTableColumns} expandableRows pagination />
        </PreviewCard>
      </Block>
    </div>
  );
};

export default AdsDataTable;
