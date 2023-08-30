import React from "react";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import { useTranslation } from "next-i18next";
type Props = {
  children: ReactNode;
};

function Layout({ children}: Props) {
  return (
    <>
      <Navbar/>
      {children}
    </>
  );
}

export default Layout;
