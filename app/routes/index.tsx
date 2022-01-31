import React from "react";
import { Link, useLoaderData, LinksFunction } from "remix";
import ProductsWrapper from "../components/organism/ProductsWrapper";
import productStylesURL from "../styles/product.css";
import commonStylesURL from "../styles/common.css";
import { api } from "~/services";

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
export async function loader() {
  const [categories, products] = await Promise.all([
    api.getCategory(),
    api.getProducts(),
  ]);
  // const [categories, products] = await Promise.all([
  //   categoriesRes.json(),
  //   productsRes.json(),
  // ]);
  console.log("Caaaa", categories, products);

  return { categories, products };
}
const Home = () => {
  const { products, categories } = useLoaderData();

  return (
    <div style={{ padding: 10 }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {categories.map((data: any) => (
          <Link
            to={`/category/${data}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              key={data}
              style={{
                textAlign: "center",
                boxShadow: "5px 5px 24px 15px rgba(0, 0, 0, 0.04)",
                padding: 10,
                margin: 10,
                backgroundColor: "#EEEEEE",
                // color: "#EEEEEE",
                borderRadius: 10,
                width: 300,
                maxWidth: 300,
              }}
            >
              <h1 style={{ fontVariantCaps: "all-petite-caps" }}>{data}</h1>
            </div>
          </Link>
        ))}
      </div>
      <ProductsWrapper data={products} />
    </div>
  );
};

export default Home;
