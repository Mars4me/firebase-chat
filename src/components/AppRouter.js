import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const user = false;
  return user ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route {...route}></Route>
      ))}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route {...route}></Route>
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
