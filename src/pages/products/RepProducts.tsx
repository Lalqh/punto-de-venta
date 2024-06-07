import styled from "styled-components";
import { Button } from "@mui/material";
import TableProducts from "./TableProducts";

const StyledButtonAdd = styled(Button)`
  color: green;
  border-color: green;
  margin-right: 10px;
  transition: all 0.3s ease-in-out;

  &&:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #00c853 30%, #b2ff59 90%);
    color: white;
  }
`;

const StyledButtonDelete = styled(Button)`
  color: red;
  border-color: red;
  transition: all 0.3s ease-in-out;

  &&:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #d50000 30%, #ff1744 90%);
    color: white;
  }
`;

const RepProducts = () => {
  return (
    <div className="p-3">
      <div className="card mt-3">
        <div className="row p-3">
          <div className="col-12 mt-3">
            <TableProducts />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <StyledButtonAdd variant="outlined">Agregar</StyledButtonAdd>
        <StyledButtonDelete variant="outlined">Eliminar</StyledButtonDelete>
      </div>
    </div>
  );
};

export default RepProducts;
