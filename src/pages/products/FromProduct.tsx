import { TextField, Typography, IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoadingButton from "../../components/LoadingButton";
import AutoCompleteCategory from "../../components/AutoCompleteCategory";
import { useNavigate } from "react-router-dom";

const FromProduct = () => {
  const navigate = useNavigate();
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
              />
            </div>
            <div className="col-md-6 col-sm-12 mt-4">
              <TextField
                label="Descripción"
                name="descripcion"
                placeholder="Descripción"
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              <TextField
                label="Precio"
                variant="outlined"
                name="precio"
                placeholder="Precio"
                fullWidth
              />
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              <TextField
                label="Stock"
                variant="outlined"
                name="stock"
                placeholder="Stock"
                fullWidth
              />
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              <AutoCompleteCategory />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end p-3">
          <LoadingButton textButton="Guardar" />
        </div>
      </div>
    </div>
  );
};

export default FromProduct;
