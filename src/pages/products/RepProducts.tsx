import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Table from "./TableProducts";
import { getProducts, headTable } from "../../services/ProductsServices";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import ProgressBar from "../../components/ProgressBar";

const RepProductos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    const response = await getProducts();
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-3">
      <Typography variant="h5">Productos</Typography>
      <div className="card mt-3 shadow rounded">
        <div className="row p-3">
          <div className="col-12 mt-3">
            {loading ? <ProgressBar /> : <Table rows={data} />}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Button
          onClick={() => {
            navigate("add");
          }}
          text="Agregar"
        />
      </div>
    </div>
  );
};

export default RepProductos;
