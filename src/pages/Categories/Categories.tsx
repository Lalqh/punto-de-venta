import { Route, Routes } from "react-router-dom";
import FromCategory from "./FromCategories";
import RepCategories from "./RepCategories";

const Categories = () => {
  return (
    <Routes>
      <Route path="/" element={<RepCategories />} />
      <Route path="add/*" element={<FromCategory />} />
    </Routes>
  );
};

export default Categories;
