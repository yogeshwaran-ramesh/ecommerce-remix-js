import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { HeartIcon } from "./Icons";
import { ProductType } from "../models";
import { Link } from "react-router-dom";
const { Paragraph, Text } = Typography;

const ProductCard = (data: ProductType) => {
  const { image, title, price, id }: ProductType = data;

  return (
    <div
      style={{
        width: 300,
        height: 450,
        borderRadius: 15,
        margin: 20,
        padding: 20,
        backgroundColor: "#EEEEEE",
      }}
    >
      <Link to={`/product/${id}`}>
        <div
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 20,
            position: "relative",
          }}
        >
          <button
            style={{
              backgroundColor: "blanchedalmond",
              padding: 5,
              borderRadius: "50%",
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 1,
            }}
          >
            Like
          </button>
          <img
            alt="example"
            src={image}
            style={{
              width: "100%",
              borderRadius: 10,
              height: 280,
            }}
          />
        </div>
      </Link>
      <div
        style={{
          display: "flex",
          margin: "10px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "70%",
            margin: 10,
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: 20 }}>Rs. {price}</span>
          <span style={{ fontSize: 14, textOverflow: "ellipsis", width: 200 }}>
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
