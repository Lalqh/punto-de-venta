import { Route, Routes } from "react-router-dom";
import FromCategories from "./FromCategories";
import RepCategories from "./RepCategories";

const Categories = () => {
  return (
    <Routes>
      <Route path="/" element={<RepCategories />} />
      <Route path="add" element={<FromCategories />} />
      <Route path="edit/:id" element={<FromCategories />} />
    </Routes>
  );
};

export default Categories;
