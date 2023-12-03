import React from "react";
import { Outlet } from "react-router-dom";
import Head from "./head/Head";
import Header from "./header/Header";
import AppRoot from "./global/AppRoot";
import AppMain from "./global/AppMain";
import AppWrap from "./global/AppWrap";

const Layout = ({ title, app, ...props }) => {
  return (
    <>
      <Head title={!title && "Keywordio"} />
      <AppRoot>
        <AppMain>
          <AppWrap>
            <Header fixed />
            <Outlet />
          </AppWrap>
        </AppMain>
      </AppRoot>
    </>
  );
};
export default Layout;
