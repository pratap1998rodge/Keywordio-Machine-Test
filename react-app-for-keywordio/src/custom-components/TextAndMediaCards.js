import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Block, PreviewCard } from "../components/Component";
import { Button, Card, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const TextAndMediaCards = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const selectedImageList = location.state?.image;

  console.log("formData=>", formData);
  console.log("selectedImageList=>", selectedImageList);

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (selectedImageList && selectedImageList.length > 0) {
      const selectedImage = selectedImageList[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(selectedImage);
    }
  }, [selectedImageList]);

  return (
    <div>
      <Block>
        <PreviewCard className="preview-card-width">
          <div className="product-thumb">
            <h5>Create Text and Media</h5>
          </div>

          <Row className="g-gs">
            <Col xxl={4} lg={4} sm={6}>
              <Card className="card-bordered product-card">
                <div className="card-inner text-center">
                  {imageSrc && <img src={imageSrc} alt="Selected Image" />}
                  <br />
                  <br />
                  <ul className="product-tags">
                    <li>
                      <span>{formData.productName}</span>
                    </li>
                  </ul>
                  <h5 className="product-title">
                    <span>{formData.email}</span>
                  </h5>
                  <h5 className="product-title">
                    <span>{formData.description}</span>
                  </h5>
                  <h5 className="product-title">
                    <span className="product-price text-primary h5">${formData.price}</span>
                  </h5>
                </div>
              </Card>
            </Col>
          </Row>
          <Col md="12" className="d-flex justify-content-end mt-3">
            <div className="form-group">
              <Button color="primary" size="lg" type="submit" className="submit-button-mr">
                Next
              </Button>
            </div>
          </Col>
        </PreviewCard>
      </Block>
    </div>
  );
};

export default TextAndMediaCards;
