import { Route, Routes } from "react-router-dom";
import RepProductos from "./RepProducts";
import FromProduct from "./FromProduct";

const Productos = () => {
  return (
    <Routes>
      <Route path="/" element={<RepProductos />} />
      <Route path="add" element={<FromProduct />} />
      <Route path="edit/:id" element={<FromProduct />} />
    </Routes>
  );
};

export default Productos;
