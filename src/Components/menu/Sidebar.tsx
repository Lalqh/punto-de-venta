import { Route, Routes } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import Products from "../../pages/Products";
import Categories from "../../pages/Categories";

const Menu = () => {
  const sidebarItems = [
    { name: "Productos", link: "/" },
    { name: "Categorías", link: "/categorias" },
  ];

  return (
    <div className="d-flex">
      <SidebarItems items={sidebarItems} />
      <div className="flex-grow-1 p-3">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="categorias/*" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
};

export default Menu;
