import { Outlet, useCatch } from "remix";
import type { MetaFunction } from "remix";
import Layout from "./containers/Layout";
import Document from "./containers/Document";
import globalStylesUrl from "~/styles/global.css";
import AppContext from "./store/AppContext";
import { useState } from "react";
import { ProductType } from "./models";

export let links = () => {
  return [{ rel: "stylesheet", href: globalStylesUrl }];
};
export const meta: MetaFunction = () => {
  return { title: "Remix App" };
};

export default function App() {
  const [cart, setCart] = useState([]);
  const [liked, setLiked] = useState([] as ProductType[]);
  const [likedId, setLikedId] = useState([] as number[]);

  const updateLiked = (data: ProductType) => {
    let temp = [...liked];
    let tempId = [...likedId];
    const existing = liked.some(
      (product: ProductType) => product.id === data.id
    );
    console.log(
      "existing",
      existing,
      temp.filter((product: ProductType) => product.id !== data.id)
    );
    if (existing) {
      setLiked(temp.filter((product: ProductType) => product.id !== data.id));
      setLikedId(tempId.filter((id: number) => id !== data.id));
    } else {
      setLiked([...temp, data]);
      setLikedId([...tempId, data.id]);
    }
  };
  console.log("LIked", liked, cart);
  return (
    <Document>
      <AppContext.Provider
        value={{
          state: {
            liked: liked,
            cart: cart,
          },
          setCart: setCart,
          setLiked: (data: ProductType) => updateLiked(data),
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
