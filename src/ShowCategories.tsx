import { useEffect, useState } from "react";

const ShowCategories = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3010/api/v1/categories/categories")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <>
      <h1>Mostrar Categorías</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowCategories;
