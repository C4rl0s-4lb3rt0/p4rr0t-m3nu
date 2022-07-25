import { Navigate, Route, Routes } from "react-router-dom";
import { AuthPages } from "../pages/AuthPages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<AuthPages />} />
      
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};