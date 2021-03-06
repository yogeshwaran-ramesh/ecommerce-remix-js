import { ProductType } from "../models";
import { LinksFunction } from "remix";
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

const CartCard = (product: ProductType) => {
  const value: any = useContext(AppContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#EEEEEE",
        padding: 10,
        width: 600,
        borderRadius: "20px",
        margin: "15px",
      }}
    >
      <div style={{ width: 300, padding: 20, borderRadius: 15 }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 15,
            padding: 20,
            position: "relative",
            textAlign: "center",
          }}
        >
          <img
            alt="example"
            src={product.image}
            style={{
              width: "100%",
              borderRadius: 10,
            }}
          />
        </div>
      </div>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            marginTop: 20,
          }}
        >
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{"product"}</span>
            <span>{"heart"}</span>
          </div> */}
          <span style={{ fontWeight: "bold", fontSize: 20, margin: 10 }}>
            Rs. {product.price}
          </span>
          <span style={{ fontWeight: "600", fontSize: 18, margin: 10 }}>
            Cateogory: {product.category}
          </span>
          <span style={{ fontSize: 14, margin: 10 }}>
            {product.description}
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            style={{
              width: "50%",
              padding: 10,
              margin: 5,
            }}
            onClick={() => value.setCartProducts(product)}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
