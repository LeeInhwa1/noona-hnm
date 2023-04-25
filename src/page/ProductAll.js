import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Row, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  // const [productList, setProductList] = useState([]);
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispath = useDispatch();

  const getProducts = () => {
    // 리덕스 미들웨어로 변경
    let searchQuery = query.get("q") || "";
    dispath(productAction.getProducts(searchQuery));
    // let url = `https://my-json-server.typicode.com/LeeInhwa1/noona-hnm/products?q=${searchQuery}`;
    // let response = await fetch(url);
    // let data = await response.json();
    // setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]); // useEffect 배열이 비어있으면, 초기에 첫 로딩때만 한번 호출됨

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
