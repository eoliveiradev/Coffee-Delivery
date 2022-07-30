import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { DefaultHeader } from "../components/Header/Header";
import { Home } from "../pages/Home/Home";
import { LayoutContainer } from "./styles";

interface LocationContextType {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}
export const LocationContext = createContext({} as LocationContextType)

export function DefaultLayout() {
  const [location, setLocation] = useState("Localização")

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <LayoutContainer>
        <DefaultHeader />
        <Outlet />
      </LayoutContainer>
    </LocationContext.Provider>
  )
}