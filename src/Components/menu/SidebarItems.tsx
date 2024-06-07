import { Link } from "react-router-dom";

interface SidebarProps {
  items: Array<{ name: string; link: string }>;
}

const SidebarItems: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 vh-100"
      style={{ width: "250px", backgroundColor: "#1976d2" }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      ></Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {items.map((item, index) => (
          <li className="nav-item" key={index}>
            <Link to={item.link} className="nav-link" style={{color: "white"}}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarItems;
