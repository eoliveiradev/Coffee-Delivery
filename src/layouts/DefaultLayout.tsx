import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { DefaultHeader } from "../components/Header/Header";
import { Home } from "../pages/Home/Home";
import { LayoutContainer } from "./styles";




export function DefaultLayout() {
  return (
    <LayoutContainer>
      <DefaultHeader />
      <Outlet />
    </LayoutContainer>
  )
}