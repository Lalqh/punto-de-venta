import { useEffect, useState } from "react";

const ShowProducts = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch("http://localhost:3010/api/v1/products/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <h1>Mostrar datos</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
               <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowProducts;
