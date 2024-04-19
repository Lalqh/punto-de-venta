import { ChangeEvent, useState } from "react";
import LoadingButton from "./Components/LoadingButton";
import Alert from "./Components/Alert";

const Login = () => {
  const data = { email: "correo@gmail.com", password: "1234" };
  const [isSaving, setIsSaving] = useState(false);
  const [showAlert, setshowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("");
  const [values, setValues] = useState({ email: "", password: "" });

  const handleClick = () => {
    setIsSaving(true);
    setshowAlert(false);

    setTimeout(() => {
      if (values.email === data.email && values.password === data.password) {
        setshowAlert(true);
        setAlertText("Datos correctos");
        setAlertType("alert alert-success");
      } else {
        setshowAlert(true);
        setAlertText("Datos incorrectos");
        setAlertType("alert alert-danger");
      }
      setIsSaving(false);
    }, 2000);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    console.log(target.name, target.value);
    setValues({ ...values, [target.name]: target.value });
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card w-50">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo
              </label>
              <input
                value={values.email}
                type="email"
                className="form-control"
                name="email"
                aria-describedby="emailHelp"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                value={values.password}
                onChange={handleInputChange}
                type="password"
                className="form-control"
                name="password"
              />
            </div>
            <div className="d-flex justify-content-center">
              <LoadingButton
                textButton="Ingresar"
                loading={isSaving}
                handleClick={handleClick}
              />
            </div>
            {showAlert && (
              <div className="mt-3">
                <Alert textAlert={alertText} typeAlert={alertType} />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
