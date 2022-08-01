import { CartWrapper, DefaultHeaderContainer, HeaderNavigation, InnerHeader, LocationSelector } from "./styles";
import logo from "../../assets/images/logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import React, { createContext, useContext, useState } from "react";
import { LocationSelectionMenu } from "./components/LocationSelectionMenu/LocationSelectionMenu";
import { LocationContext } from "../../layouts/DefaultLayout";

interface LocationSelectionMenuContextType{
  setIsSelectingLocation: React.Dispatch<React.SetStateAction<boolean>>;
  isSelectingLocation: boolean;
}
export const LocationSelectionMenuContext = createContext({} as LocationSelectionMenuContextType);

export function DefaultHeader() {
  const [isSelectingLocation, setIsSelectingLocation] =useState(false);
  const { location } = useContext(LocationContext)

  return (
    <DefaultHeaderContainer>
      <InnerHeader>   

        <img src={logo}></img>

        <HeaderNavigation
          onMouseLeave={() => setIsSelectingLocation(false)}
        >
          <LocationSelector 
            onClick={() => setIsSelectingLocation(!isSelectingLocation)}
          >
            <MapPin 
              size={22} 
              weight="fill" 
              color={defaultTheme["product-colors"]["purple"]} 
            />
            <span>
              {location}
            </span>
          </LocationSelector>
          <LocationSelectionMenuContext.Provider
            value={{
              isSelectingLocation,
              setIsSelectingLocation
            }}
          >
            {isSelectingLocation && (
                <LocationSelectionMenu />
            )}
          </LocationSelectionMenuContext.Provider>

          <CartWrapper 
            onFocus={() => setIsSelectingLocation(false)}
          >
            <ShoppingCart 
              size={22} 
              weight="fill" 
              
            />
          </CartWrapper>
        </HeaderNavigation>
      </InnerHeader>
    </ DefaultHeaderContainer>
  )
}