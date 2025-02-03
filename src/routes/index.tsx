import { PATH } from "../consts";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";

export const RouteComponent = () => (
  <Routes>
    <Route path={PATH.HOME} element={<HomePage />} />
  </Routes>
);
