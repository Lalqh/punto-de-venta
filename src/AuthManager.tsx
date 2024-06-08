import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Sidebar from "./Components/menu/Sidebar";
import { UserContext } from "./context/UserContext";

const AuthManager = () => {
  const { login } = useContext(UserContext);
  const [isLoing, setisLoing] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setisLoing(true);
    }
  }, [login]);

  return (
    <>
      <Routes>
        {isLoing ? (
          <Route path="/*" element={<Sidebar />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </>
  );
};

export default AuthManager;
