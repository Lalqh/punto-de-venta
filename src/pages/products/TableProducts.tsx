import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TablePagination,
} from "@mui/material";

const TableProducts = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>FECHA</TableCell>
            <TableCell>NOMBRE</TableCell>
            <TableCell>CATEGORÍA</TableCell>
            <TableCell>ACCIONES</TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableProducts;
