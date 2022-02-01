import { useContext } from "react";
import { useLoaderData } from "remix";
import { products } from "~/constants/products";
import AppContext from "~/store/AppContext";

export async function loader({ params }: any) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const data = await res.json();
  return { product: data };
}
const SingleProduct = () => {
  const { product } = useLoaderData();
  const value: any = useContext(AppContext);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        margin: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#EEEEEE",
          padding: 10,
          alignItems: "center",
          width: "50%",
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
                backgroundColor: "#d49b00",
                borderColor: "#d49b00",
                width: "50%",
                margin: 5,
                padding: 10,
              }}
            >
              Buy Now
            </button>
            <button
              style={{
                width: "50%",
                padding: 10,
                margin: 5,
              }}
              onClick={() => value.setCartProducts(product)}
            >
              {value.state.cartProductIds.includes(product.id)
                ? "Remove from cart"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
