import { ChangeEvent, useContext, useState } from "react";
import { Avatar, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoadingButton from "./components/LoadingButton";
import Alert from "./components/Alert";
import { loginUser } from "./services/AuthServices";
import { setSessionStorage } from "./services/StorageService";
import { UserContext } from "./context/UserContext";

const Login = () => {
  const { setLogin } = useContext(UserContext);
  const [isSaving, setIsSaving] = useState(false);
  const [showAlert, setshowAlert] = useState<boolean>(false);
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState<
    "error" | "warning" | "info" | "success"
  >("error");
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrores] = useState({ email: false, password: false });

  const handleClick = async () => {
    setIsSaving(true);
    setshowAlert(false);

    const response = await loginUser(values, errors, setErrores);

    if (response.statusCode == 400) {
      setAlertText(response.message);
      setAlertType("warning");
      setshowAlert(true);
    } else if (response.statusCode == 401) {
      setAlertText("Correo o contraseña incorrectos");
      setAlertType("warning");
      setshowAlert(true);
    } else {
      setSessionStorage(response.token);
      setLogin(true);
    }

    setIsSaving(false);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [target.name]: target.value });
    setErrores({ ...errors, [target.name]: false });
  };

  return (
    <div className="container mt-5">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6 col-xs-12">
          <Alert
            setVisible={setshowAlert}
            visible={showAlert}
            textAlert={alertText}
            typeAlert={alertType}
          />

          <div className="card rounded shadow">
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <Avatar
                  style={{
                    backgroundColor: "#1976d2",
                    height: 56,
                    width: 56,
                  }}
                >
                  <LockOutlinedIcon />
                </Avatar>
              </div>
              <Typography className="text-center mb-5 mt-3">
                Inicia sesión con tu usuario y contraseña
              </Typography>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Correo"
                margin="normal"
                variant="outlined"
                onChange={handleInputChange}
                error={errors.email}
                helperText={errors.email ? "Campo requerido" : ""}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Contraseña"
                margin="normal"
                variant="outlined"
                type="password"
                onChange={handleInputChange}
                error={errors.password}
                helperText={errors.password ? "Campo requerido" : ""}
              />
              <div className="d-flex justify-content-center mt-2">
                <LoadingButton
                  textButton="Ingresar"
                  handleClick={handleClick}
                  loading={isSaving}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
