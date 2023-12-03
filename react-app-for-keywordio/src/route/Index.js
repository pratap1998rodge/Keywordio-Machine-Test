import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Layout from "../layout/Index";
import DashboardPage from "../custom-components/DashboardPage";
import AdsForm from "../custom-components/AdsForm";
import TextAndMediaCards from "../custom-components/TextAndMediaCards";

const Pages = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}`} element={<Layout />}>
        <Route index element={<Navigate to="dashboard" />}></Route>

        <Route path="dashboard" element={<DashboardPage />}></Route>
        <Route path="ads-input-form" element={<AdsForm />}></Route>
        <Route path="text-media-card" element={<TextAndMediaCards />}></Route>
      </Route>
    </Routes>
  );
};
export default Pages;
