import { Outlet, useCatch } from "remix";
import type { MetaFunction } from "remix";
import Layout from "./containers/Layout";
import Document from "./containers/Document";
import globalStylesUrl from "~/styles/global.css";
import commonStylesUrl from "~/styles/common.css";

import AppContext from "./store/AppContext";
import { useState } from "react";
import { ProductType } from "./models";

export let links = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: commonStylesUrl },
  ];
};
export const meta: MetaFunction = () => {
  return { title: "Remix App" };
};

export default function App() {
  const [cartProducts, setCartProducts] = useState([] as ProductType[]);
  const [likedProducts, setLikedProducts] = useState([] as ProductType[]);
  const [likedProductIds, setLikedProductIds] = useState([] as number[]);
  const [cartdProductIds, setCartProductIds] = useState([] as number[]);

  const updateCart = (data: ProductType) => {
    let temp = [...cartProducts];
    let tempId = [...cartdProductIds];
    const existing = cartProducts.some(
      (product: ProductType) => product.id === data.id
    );

    if (existing) {
      setCartProducts(
        temp.filter((product: ProductType) => product.id !== data.id)
      );
      setCartProductIds(tempId.filter((id: number) => id !== data.id));
    } else {
      setCartProducts([...temp, data]);
      setCartProductIds([...tempId, data.id]);
    }
  };

  const updateLiked = (data: ProductType) => {
    let temp = [...likedProducts];
    let tempId = [...likedProductIds];
    const existing = likedProducts.some(
      (product: ProductType) => product.id === data.id
    );

    if (existing) {
      setLikedProducts(
        temp.filter((product: ProductType) => product.id !== data.id)
      );
      setLikedProductIds(tempId.filter((id: number) => id !== data.id));
    } else {
      setLikedProducts([...temp, data]);
      setLikedProductIds([...tempId, data.id]);
    }
  };
  return (
    <Document>
      <AppContext.Provider
        value={{
          state: {
            likedProducts: likedProducts,
            cartProducts: cartProducts,
            likedProductIds: likedProductIds,
            cartProductIds: cartdProductIds,
          },
          setCartProducts: (data: ProductType) => updateCart(data),
          setLikedProducts: (data: ProductType) => updateLiked(data),
        }}
      >
        <Layout>
          <Outlet />
        </Layout>
      </AppContext.Provider>
    </Document>
  );
}
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = <p>Oops! You need Access.</p>;
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does'nt exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}
