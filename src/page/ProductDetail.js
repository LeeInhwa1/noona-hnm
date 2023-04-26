import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  let { id } = useParams();
  // const [product, setProduct] = useState(null);
  const dispath = useDispatch();
  const product = useSelector((state) => state.product.selectedItem);

  const getProductDetail = async () => {
    dispath(productAction.getProductDetail(id));
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice === true ? "Conscious choice" : ""}</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.map((size) => (
                  <Dropdown.Item href={`#/${size}`}>{size}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <button>추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
