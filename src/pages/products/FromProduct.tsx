import { TextField, Typography, IconButton } from "@mui/material";
import Swal from "sweetalert2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoadingButton from "../../Components/LoadingButton";
import AutoCompleteCategory from "../../Components/AutoCompleteCategory";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { saveProduct } from "../../services/ProductsServices";

const FromProduct = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    categoria: "",
  });

  const [errors, setErrors] = useState({
    nombre: false,
    descripcion: false,
    precio: false,
    stock: false,
    categoria: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    let { name, value } = e.target;
    let newValues = { ...values, [name]: value };

    if (name === "precio") {
      // Permitir solo números
      if (!/^\d*\.?\d*$/.test(value)) {
        return;
      }
    }

    if (name === "stock") {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    setValues(newValues);
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await saveProduct(values, errors, setErrors);
    if (response.createdAt) {
      Swal.fire({
        icon: "success",
        title: "Producto creado",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate(-1);
    } else if (response.statusCode === 400) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Completa todos los campos",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrio un error al guardar el producto",
      });
    }
    setLoading(false);
  };

  return (
    <div className="p-3">
      <div className="d-flex align-items-center justify-content-start">
        <IconButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5">Productos</Typography>
      </div>
      <div className="card shadow rounded mt-3">
        <div className="card shadow rounded m-3 mt-4">
          <div className="row p-3">
            <div className="col-md-6 col-sm-12 mt-4">
              <TextField
                label="Nombre"
                variant="outlined"
                name="nombre"
                placeholder="Nombre"
                fullWidth
                value={values.nombre}
                onChange={handleChange}
                error={errors.nombre}
                helperText={errors.nombre ? "Campo requerido" : ""}
              />
            </div>
            <div className="col-md-6 col-sm-12 mt-4">
              <TextField
                label="Descripción"
                name="descripcion"
                placeholder="Descripción"
                fullWidth
                variant="outlined"
                value={values.descripcion}
                onChange={handleChange}
                error={errors.descripcion}
                helperText={errors.descripcion ? "Campo requerido" : ""}
              />
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              <TextField
                label="Precio"
                variant="outlined"
                name="precio"
                placeholder="Precio"
                fullWidth
                value={values.precio}
                onChange={handleChange}
                error={errors.precio}
                helperText={errors.precio ? "Campo requerido" : ""}
              />
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              <TextField
                label="Stock"
                variant="outlined"
                name="stock"
                placeholder="Stock"
                fullWidth
                value={values.stock}
                onChange={handleChange}
                error={errors.stock}
                helperText={errors.stock ? "Campo requerido" : ""}
              />
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              <AutoCompleteCategory
                category={values.categoria}
                changeCategory={(category: any) => {
                  setErrors({ ...errors, categoria: false });
                  setValues({
                    ...values,
                    categoria: category,
                  });
                }}
                error={errors.categoria}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end p-3">
          <LoadingButton
            handleClick={handleSubmit}
            loading={loading}
            textButton="Guardar"
          />
        </div>
      </div>
    </div>
  );
};

export default FromProduct;
