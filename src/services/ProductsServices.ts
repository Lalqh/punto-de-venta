import { fectGet, fecthPost } from "./ApiServices";

export const headTable = ["Nombre", "Precio", "Stock"];

export const getProducts = async () => {
  const response = await fectGet("products");
  if (response.success == false) {
    return [];
  }
  return response;
};

export const saveProduct = async (values: any, errors: any, setErrors: Function) => {
  let error = false;
  let newError = errors;

  if (!values.nombre || values.nombre == "") {
    newError.nombre = true;
    setErrors(newError);
    error = true;
  }

  if (!values.descripcion || values.descripcion == "") {
    newError.descripcion = true;
    setErrors(newError);
    error = true;
  }

  if (!values.precio || values.precio == "") {
    newError.precio = true;
    setErrors(newError);
    error = true;
  }

  if (!values.stock || values.stock == "") {
    newError.stock = true;
    setErrors(newError);
    error = true;
  }

  if (!values.categoria || values.categoria == "") {
    newError.categoria = true;
    setErrors(newError);
    error = true;
  }

  if (!error) {

    let body = {
      name: values.nombre,
      description: values.descripcion,
      price: values.precio,
      stock: values.stock,
      category: values.categoria.id,
    };

    const response = await fecthPost("products", body);
    return response;
  } else {
    return { statusCode: 400, message: "Completa todos los campos" };
  }
};
