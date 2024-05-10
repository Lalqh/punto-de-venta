import { ChangeEvent, useEffect, useState } from "react";
import { Avatar, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoadingButton from "./Components/LoadingButton";
import Alert from "./Components/Alert";

const Login = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [showAlert, setshowAlert] = useState<boolean>(false);
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState<
    "error" | "warning" | "info" | "success"
  >("error");
  const [values, setValues] = useState({ email: "", password: "" });
  const [showData, setshowData] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  const handleClick = () => {
    setIsSaving(true);
    setshowAlert(false);

    if (values.email === "" || values.password === "") {
      setAlertText("Todos los campos son requeridos");
      setAlertType("error");
      setshowAlert(true);
      setIsSaving(false);
      return;
    } else {
      fetch("http://localhost:3010/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              localStorage.setItem("user", JSON.stringify(data.dataUser));
              localStorage.setItem("token", data.token);
              setAlertText("Inicio de sesión exitoso");
              setAlertType("success");
              setshowAlert(true);
              setIsSaving(false);
            });
          } else {
            setIsSaving(false);
            setAlertText("Error al intentar iniciar sesión");
            setAlertType("error");
            setshowAlert(true);
          }
        })
        .catch((error) => {
          setIsSaving(false);
          setAlertText("Error al intentar iniciar sesión" + error);
          setAlertType("error");
          setshowAlert(true);
        });
    }
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [target.name]: target.value });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      const userObj = JSON.parse(user);
      fetch(`http://localhost:3010/api/v1/users?email=${userObj.emial}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              if (data.user) {
                fetch("http://localhost:3010/api/v1/products", {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then((response) => response.json())
                  .then((data) => {
                    setData(data);
                    setshowData(true);
                  });
              }
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

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
          {showData && (
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Precio</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
