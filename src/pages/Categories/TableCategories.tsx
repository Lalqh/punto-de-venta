import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { deleteCategory } from "../../services/CategoryServices";

interface TableRow {
  _id: string;
  name: string;
  description: string;
}

interface TableProps {
  rows: TableRow[];
  updateTable: () => void;
}

const TableCategories: React.FC<TableProps> = ({ rows, updateTable }) => {
  const navigate = useNavigate();
  const itemsPerPage = 5;

  const [activePage, setActivePage] = useState(1);

  const lastIndex = activePage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = rows.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(rows.length / itemsPerPage);

  const handlePrevPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleNextPage = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteCategory(id);
          Swal.fire("Eliminado", "La categoría ha sido eliminada", "success");
          updateTable();
        } catch (error) {
          Swal.fire("Error", "Hubo un error al eliminar la categoría", "error");
        }
      }
    });
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row) => (
            <tr key={row._id}>
              <td>{row.name}</td>
              <td>{row.description}</td>
              <td>
                <Tooltip title="Editar" placement="top">
                  <IconButton onClick={() => navigate(`edit/${row._id}`)}>
                    <AppRegistrationOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Eliminar" placement="top">
                  <IconButton onClick={() => handleDelete(row._id)}>
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="d-flex justify-content-end">
        <ul className="pagination">
          <li
            className={`page-item ${activePage === 1 ? "disabled" : ""}`}
            onClick={handlePrevPage}
          >
            <span className="page-link">{"<"}</span>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{`${activePage} - ${totalPages}`}</span>
          </li>
          <li
            className={`page-item ${
              activePage === totalPages ? "disabled" : ""
            }`}
            onClick={handleNextPage}
          >
            <span className="page-link">{">"}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TableCategories;
