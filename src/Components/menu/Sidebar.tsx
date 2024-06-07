import { Route, Routes } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import Products from "../../pages/products/Products";
import Categories from "../../pages/Categories";
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';

const Menu = () => {
  const sidebarItems = [
    { name: "Productos", link: "/", icon: <ContentPasteOutlinedIcon /> },
    { name: "Categorías", link: "/categorias", icon: <AddHomeOutlinedIcon /> },
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
