import productStylesURL from "../../styles/product.css";
import commonStylesURL from "../../styles/common.css";

import { LinksFunction } from "remix";
import { Link } from "react-router-dom";
import { ProductType } from "~/models";
import CartCard from "../CartCard";
import { useContext } from "react";
import AppContext from "~/store/AppContext";

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
const CartWrapper = ({ data }: any) => {
  const value: any = useContext(AppContext);
  const products = value.state.cartProducts;
  console.log("Cart products", products);
  const renderCartValues = () => {
    if (products.length)
      return products.map((product: ProductType) => <CartCard {...product} />);
    else
      return (
        <div className="flex flex-center flex-coulmn">
          <span>No items in the cart</span>
          <Link to="/">Add Products</Link>
        </div>
      );
  };
  return (
    <div
      style={{
        margin: 5,
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ margin: 20 }}>Cart ({value.state.cartProducts.length})</h1>
      <div className="flex flex-wrap-center">{renderCartValues()}</div>
    </div>
  );
};
export default CartWrapper;
