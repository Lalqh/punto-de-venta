import { Route, Routes } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import Products from "../../pages/products/Products";
import Categories from "../../pages/Categories";
import CategoryIcon from "@mui/icons-material/Category";
import CheckroomIcon from "@mui/icons-material/Checkroom";

const Menu = () => {
  const sidebarItems = [
    { name: "Productos", link: "/productos", icon: <CheckroomIcon /> },
    { name: "Categorías", link: "/categorias", icon: <CategoryIcon /> },
  ];

  return (
    <div className="d-flex">
      <SidebarItems items={sidebarItems} />
      <div className="flex-grow-1 p-3">
        <Routes>
          <Route path="productos/*" element={<Products />} />
          <Route path="categorias/*" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
};

export default Menu;
