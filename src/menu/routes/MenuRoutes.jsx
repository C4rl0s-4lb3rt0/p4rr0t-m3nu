import { Navigate, Route, Routes } from "react-router-dom";
import { MenuPages } from "../pages/MenuPages";

export const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuPages />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};