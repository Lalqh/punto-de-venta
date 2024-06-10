import { fectDelete, fectGet, fecthPost, fecthPut } from "./ApiServices";

export const headTable = ["Nombre", "Descripción"];

interface CategoryValues {
  id?: string;
  nombre: string;
  descripcion: string;
}

interface Errors {
  nombre?: boolean;
  descripcion?: boolean;
}

const validateCategory = (
  values: CategoryValues,
  errors: Errors,
  setErrors: (errors: Errors) => void
): boolean => {
  let error = false;
  let newErrors = { ...errors };

  if (!values.nombre || values.nombre.trim() === "") {
    newErrors.nombre = true;
    error = true;
  } else {
    newErrors.nombre = false;
  }

  if (!values.descripcion || values.descripcion.trim() === "") {
    newErrors.descripcion = true;
    error = true;
  } else {
    newErrors.descripcion = false;
  }

  setErrors(newErrors);
  return error;
};

export const getCategories = async () => {
  return await fectGet("categories");
};

export const getCategoryById = async (id: string) => {
  return await fectGet(`categories/${id}`);
};

export const saveCategory = async (
  values: CategoryValues,
  errors: Errors,
  setErrors: (errors: Errors) => void
) => {
  if (validateCategory(values, errors, setErrors)) {
    throw new Error("Completa todos los campos");
  }

  let body = {
    id: values.id,
    name: values.nombre,
    description: values.descripcion,
  };

  if (values.id) {
    return await fecthPut(`categories/${values.id}`, body);
  } else {
    return await fecthPost("categories", body);
  }
};

export const deleteCategory = async (id: string) => {
  return await fectDelete(`categories/${id}`);
};
