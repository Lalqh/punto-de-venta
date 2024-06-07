import { Route, Routes } from "react-router-dom";
import RepProducts from "./RepProducts";

const Products = () => {
  return (
    <Routes>
      <Route path="/" element={<RepProducts />} />
      <Route path=":id" element={<h1>Producto</h1>} />
    </Routes>
  );
};

export default Products;
