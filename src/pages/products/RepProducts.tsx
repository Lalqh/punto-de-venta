import { Button } from "@mui/material";
import TableProducts from "./TableProducts";

const RepProducts = () => {
  return (
    <div className="p-3">
      <div className="d-flex justify-content-end">
        <Button variant="outlined" color="primary">
          Agregar
        </Button>
      </div>
      <div className="card mt-3">
        <div className="row p-3">
          <div className="col-12 mt-3">
            <TableProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepProducts;
