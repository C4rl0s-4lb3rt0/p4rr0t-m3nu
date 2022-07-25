
import {  Route, Routes } from "react-router-dom";
import {AuthRoutes } from '../auth/routes/AuthRoutes'
import { useCheckAuth } from "../hooks";
import { Navigate } from "react-router-dom";
import { MenuRoutes } from "../menu/routes/MenuRoutes";

export const AppRouter = () => {

  const status = useCheckAuth();

  
//   if( status === 'checking' ){
//     return <CheckingAuth />
//   }


  return (
    <Routes>

      {
      (status === 'authenticated') 
        ?<Route path="/*" element={<MenuRoutes />} />
        :<Route path="/auth/*" element={<AuthRoutes />} />
        
      }
      <Route path="/*" element={<Navigate to="/auth/login" />} />
     
    </Routes>
  );
};
