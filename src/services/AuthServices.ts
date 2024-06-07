import { fecthPost } from "./ApiServices";

export const loginUser = async (
  values: any,
  errors: any,
  setErrors: Function
) => {

  let error = false;
  let newError = errors;

  if (!values.email || values.email == "") {
    newError.email = true;
    setErrors(newError);
    error = true;
  }

  if (!values.password || values.password == "") {
    newError.password = true;
    setErrors(newError);
    error = true;
  }

  if (!error) {
    const response = await fecthPost("auth/login", values);
    return response;
  } else {
    return { statusCode: 400, message: "Completa todos los campos" };
  }
};
