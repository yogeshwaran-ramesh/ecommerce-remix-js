import React from "react";
import { Typography, Card } from "antd";
import ProductCard from "../ProductCard";
const { Title } = Typography;
const ProductsWrapper = ({ data }: any) => {
  return (
    <div style={{ margin: 5, borderRadius: 20, height: "100%" }}>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((product: any) => (
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  );
};
export default ProductsWrapper;
