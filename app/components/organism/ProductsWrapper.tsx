import ProductCard from "../ProductCard";
import productStylesURL from "../../styles/product.css";
import commonStylesURL from "../../styles/common.css";

import { LinksFunction } from "remix";
import { Link } from "react-router-dom";
import { ProductType } from "~/models";

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: productStylesURL,
    },
    {
      rel: "stylesheet",
      href: commonStylesURL,
    },
  ];
};
const ProductsWrapper = ({ data }: any) => {
  return (
    <div style={{ margin: 5, borderRadius: 20 }}>
      <div className="flex flex-wrap-center">
        {data.map((product: ProductType) => (
          // <Link to={`/product/${product.id}`}>
          <ProductCard {...product} />
          // </Link>
        ))}
      </div>
    </div>
  );
};
export default ProductsWrapper;
