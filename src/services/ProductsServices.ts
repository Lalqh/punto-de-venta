import { fectGet } from "./ApiServices";

export const headTable = ["Nombre", "Precio", "Stock"];

export const getProducts = async () => {
  const response = await fectGet("products");
  if (response.success == false) {
    return [];
  }
  return response;
};
