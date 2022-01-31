import ProductsWrapper from "~/components/organism/ProductsWrapper";
import { LinksFunction, useLoaderData } from "remix";
import productStylesURL from "../../styles/product.css";
import commonStylesURL from "../../styles/common.css";

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
export async function loader({ params }: any) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.type}`
  );
  const data = await res.json();
  return { products: data, type: params.type };
}
const Category = () => {
  const { products, type } = useLoaderData();
  return (
    <div>
      <div
        style={{
          margin: "20px 0px",
          padding: 10,
          backgroundColor: "white",
          textAlign: "center",
          borderRadius: 10,
        }}
      >
        <h1 style={{ fontVariantCaps: "all-petite-caps" }}>Showing {type}</h1>
      </div>

      <ProductsWrapper data={products} />
    </div>
  );
};

export default Category;
