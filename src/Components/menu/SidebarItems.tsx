import { Link } from "react-router-dom";

interface SidebarProps {
  items: Array<{ name: string; link: string; icon: JSX.Element }>;
}

const SidebarItems: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 vh-100 h-100 d-none d-md-block"
      style={{ width: "250px", backgroundColor: "#1976d2" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        {items.map((item, index) => (
          <li className="nav-item" key={index}>
            <Link
              to={item.link}
              className="nav-link"
              style={{ color: "white" }}
            >
              {item.icon} {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarItems;
