import React from "react";
import { Row, Col, Label, Form } from "reactstrap";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Component";
import classNames from "classnames";
import "../../../assets/custom-style/style.scss";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const FormValidationComponent = ({ alter, id }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (formData) => {
    console.log("formData=>", formData);
    console.log("image: formData.image=>", formData.image);

    Swal.fire({
      title: "successfully create Ads page!",
      // text: "You clicked the button!",
      icon: "success",
    });

    navigate(`/text-media-card`, { state: { formData, image: formData.image } });

    reset();
  };

  const formClass = classNames({
    "form-validate": true,
    "is-alter": alter,
  });

  return (
    <React.Fragment>
      <Form className={formClass} onSubmit={handleSubmit(onFormSubmit)}>
        <Row className="g-gs">
          <Col md="6">
            <div className="form-group">
              <Label className="form-label" htmlFor="productName">
                Product Name
              </Label>
              <div className="form-control-wrap">
                <input
                  type="text"
                  id="productName"
                  {...register("productName", { required: true })}
                  className="form-control"
                />
                {errors.productName && <span className="invalid">This field is required</span>}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <Label className="form-label" htmlFor="price">
                Price
              </Label>
              <div className="form-control-wrap">
                <input
                  type="price"
                  id="price"
                  {...register("price", {
                    required: true,
                  })}
                  className="form-control"
                />
                {errors.price && errors.price.type === "required" && <span className="invalid">This is required</span>}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <Label className="form-label" htmlFor="SKU">
                SKU (Stock Keeping Unit)
              </Label>
              <div className="form-control-wrap">
                <input type="text" id="SKU" {...register("SKU", { required: true })} className="form-control" />
                {errors.SKU && <span className="invalid">This field is required</span>}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <Label className="form-label" htmlFor="category">
                Category
              </Label>
              <div className="form-control-wrap">
                <div className="form-control-select">
                  <select
                    className="form-control form-select"
                    id="category"
                    {...register("category", {
                      required: true,
                    })}
                  >
                    <option label="Select a option" value=""></option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Food</option>
                  </select>
                  {errors.category && <span className="invalid">This field is required</span>}
                </div>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <Label className="form-label" htmlFor="fv-image">
                Upload Image
              </Label>
              <div className="form-control-wrap">
                <input type="file" id="fv-image" {...register("image", { required: true })} className="form-control" />
                {errors.image && <span className="invalid">This field is required</span>}
              </div>
            </div>
          </Col>
          <Col md="12">
            <div className="form-group">
              <Label className="form-label" htmlFor="description">
                Description
              </Label>
              <div className="form-control-wrap">
                <textarea
                  type="textarea"
                  className="form-control form-control-sm"
                  id="description"
                  {...register("description", {
                    required: true,
                  })}
                  placeholder="Write your description"
                />
                {errors.description && <span className="invalid">This field is required</span>}
              </div>
            </div>
          </Col>

          <Col md="12" className="d-flex justify-content-end mt-3">
            <div className="form-group">
              <Button color="danger" size="lg" className="back-button-mr" type="submit">
                Back
              </Button>
              <Button color="primary" size="lg" type="submit" className="submit-button-mr">
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};
export default FormValidationComponent;
