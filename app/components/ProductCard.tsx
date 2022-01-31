import { ProductType } from "../models";
import { LinksFunction, redirect } from "remix";
import stylesURL from "../styles/product.css";
export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesURL,
    },
  ];
};
import { useContext } from "react";
import AppContext from "../store/AppContext";

const ProductCard = (data: ProductType) => {
  const value: any = useContext(AppContext);
  console.log("State", value);
  const { image, title, price, id }: ProductType = data;

  return (
    <div
      className="product-card-wrapper"
      onClick={() => {
        console.log("hello");
        redirect("/log");
      }}
      key={id}
    >
      <div className="product-card">
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
          onClick={() => value.setLiked(data)}
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
      <div className="flex">
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
