import React from "react";
import { Routes, Route } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Layout from "../components/Layout";
import Signin from "../pages/Signin";
import PageNotFound from "../components/PageNotFound";
const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {navbar.map(({ id, Element, path, hidden }) => {
            return <Route key={id} path={path} element={Element} />;
          })}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Root;
