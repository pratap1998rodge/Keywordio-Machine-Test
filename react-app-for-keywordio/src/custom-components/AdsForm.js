import React from "react";
import { Block, BlockDes, BlockHead, BlockHeadContent, BlockTitle, PreviewCard } from "../components/Component";
import FormValidationComponent from "../components/partials/form/FormValidation";
import "../assets/custom-style/style.scss";

const AdsForm = () => {
  return (
    <div>
      <Block size="lg">
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle tag="h5">Create Text and Media </BlockTitle>
          </BlockHeadContent>
        </BlockHead>
        <PreviewCard className="form-card-width">
          <FormValidationComponent id="form-2" alter />
        </PreviewCard>
      </Block>
    </div>
  );
};

export default AdsForm;
