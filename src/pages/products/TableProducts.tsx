import  { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface TableRow {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}

interface Table {
  rows: TableRow[];
}

const TableProducts: React.FC<Table> = ({rows}) => {
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

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
           
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row) => (
            <tr key={row._id}>
            
              <td>{row.name}</td>
              <td>{row.description}</td>
              <td>{row.price}</td>
              <td>{row.stock}</td>
              <td>{row.category}</td>
              <td>
               <Tooltip title="Editar" placement="top">
                <IconButton>
                  <AppRegistrationOutlinedIcon />
                </IconButton>
               </Tooltip>
               <Tooltip title="Eliminar" placement="top">
                <IconButton>
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
               </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className='d-flex justify-content-end'>
        <ul className="pagination">
          <li className="page-item" onClick={handlePrevPage}>
            <span className="page-link">{"<"}</span>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{`${activePage} - ${totalPages}`}</span>
          </li>
          <li className="page-item" onClick={handleNextPage}>
            <span className="page-link">{">"}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TableProducts;