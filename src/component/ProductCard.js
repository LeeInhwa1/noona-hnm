import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    console.log("showDetail", item.id);
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="card" onClick={showDetail}>
      <img src={item?.img} alt=""></img>
      <div>{item?.choice === true ? "concious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.size}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
