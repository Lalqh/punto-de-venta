import { TextField, Typography, IconButton } from "@mui/material";
import Swal from "sweetalert2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoadingButton from "../../Components/LoadingButton";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategoryById, saveCategory } from "../../services/CategoryServices";
import ProgressBar from "../../Components/ProgressBar";

const FromCategories = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [values, setValues] = useState({
    id: id || "",
    nombre: "",
    descripcion: "",
  });
  const [errors, setErrors] = useState<{
    nombre?: boolean;
    descripcion?: boolean;
  }>({});

  const [loading, setLoading] = useState(false);
  const [loadInfo, setLoadInfo] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = async () => {
    setLoading(true);

    const response = await saveCategory(values, errors, setErrors);
    console.log(response);
    if (response && response.createdAt) {
      Swal.fire({
        icon: "success",
        title: id ? "Categoría editada" : "Categoría guardada",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate(-1);
    } else if (response && response.statusCode === 400) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Completa todos los campos",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al guardar la categoría",
      });
    }
    setLoading(false);
  };

  const getCategory = async (id: string | undefined) => {
    setLoadInfo(true);
    if (id !== undefined) {
      const response = await getCategoryById(id);
      if (response && response.statusCode !== 404) {
        setValues({
          id: response._id,
          nombre: response.name,
          descripcion: response.description,
        });
      }
    }
    setLoadInfo(false);
  };

  useEffect(() => {
    if (id) {
      getCategory(id);
    } else {
      setLoadInfo(false);
    }
  }, [id]);

  return (
    <div className="p-3">
      <div className="d-flex align-items-center justify-content-start">
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5">
          {id ? "Editar categoría" : "Nueva categoría"}
        </Typography>
      </div>
      <div className="card shadow rounded mt-3">
        {loadInfo ? (
          <ProgressBar />
        ) : (
          <>
            <div className="card m-3 mt-4">
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
              </div>
            </div>
            <div className="d-flex justify-content-end p-3">
              <LoadingButton
                handleClick={handleSubmit}
                loading={loading}
                textButton={id ? "Editar" : "Guardar"}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FromCategories;
