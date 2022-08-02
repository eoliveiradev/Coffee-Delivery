import { CartWrapper, DefaultHeaderContainer, HeaderNavigation, InnerHeader, LocationSelector } from "./styles";
import logo from "../../assets/images/logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import React, { createContext, useContext, useState } from "react";
import { LocationSelectionMenu } from "./components/LocationSelectionMenu/LocationSelectionMenu";
import { LocationContext } from "../../layouts/DefaultLayout";
import { ShoppingCartContext } from "../../App";
import { Link } from "react-router-dom";

interface LocationSelectionMenuContextType{
  setIsSelectingLocation: React.Dispatch<React.SetStateAction<boolean>>;
  isSelectingLocation: boolean;
}
export const LocationSelectionMenuContext = createContext({} as LocationSelectionMenuContextType);

export function DefaultHeader() {
  const [isSelectingLocation, setIsSelectingLocation] =useState(false);
  const { location } = useContext(LocationContext)
  const { numberOfItemsInCart } = useContext(ShoppingCartContext)

  return (
    <DefaultHeaderContainer>
      <InnerHeader>   
        <Link 
          to={"/"}
          id="logo__link"
        >
          <img src={logo}></img>
        </Link>
        

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

          <Link to={"/checkout"}>
            <CartWrapper 
              onFocus={() => setIsSelectingLocation(false)}
            >
              <span>{numberOfItemsInCart}</span>
              <ShoppingCart 
                size={22} 
                weight="fill" 
              />
            </CartWrapper>
          </Link>

        </HeaderNavigation>
      </InnerHeader>
    </ DefaultHeaderContainer>
  )
}