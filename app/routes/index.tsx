import React from "react";
import { Link, useLoaderData, LinksFunction } from "remix";
import ProductsWrapper from "../components/organism/ProductsWrapper";
import stylesUrl from "../styles/index.css";

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};
export async function loader() {
  const [categoriesRes, productsRes] = await Promise.all([
    fetch(`https://fakestoreapi.com/products/categories`),
    fetch(`https://fakestoreapi.com/products`),
  ]);
  const [categories, products] = await Promise.all([
    categoriesRes.json(),
    productsRes.json(),
  ]);

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
              style={{
                textAlign: "center",
                boxShadow: "5px 5px 24px 15px rgba(0, 0, 0, 0.04)",
                padding: 10,
                margin: 10,
                backgroundColor: "#EEEEEE",
                // color: "#EEEEEE",
                borderRadius: 10,
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
