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
};
