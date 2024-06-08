import { fectGet } from "./ApiServices";

export const headTable = ["Nombre", "Descripción"];

export const getCategories = async () => {
  const response = await fectGet("categories");
  if (response.success === false) {
    return [];
  }
  return response;
};
