import { PATH } from "../consts";
import { Routes, Route } from "react-router-dom";
import { HomePage, DashboardPage } from "../pages";

export const RouteComponent = () => (
  <Routes>
    <Route path={PATH.HOME} element={<HomePage />} />
    <Route path={PATH.DASHBORD} element={<DashboardPage />} />
  </Routes>
);
