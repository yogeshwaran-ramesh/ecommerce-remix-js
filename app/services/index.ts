import { category } from "~/constants/category";
import { products } from "~/constants/products";

export const api = {
  getProducts() {
    return new Promise((resolve) => {
      resolve(products);
    });
  },
  getCategory() {
    return new Promise((resolve) => {
      resolve(category);
    });
  },
  getSingleProduct(id: number) {
    return new Promise((resolve) => {
      console.log(
        id,
        products.find((data) => data.id === id)
      );
      resolve(products.find((data) => data.id === id));
    });
  },
};
