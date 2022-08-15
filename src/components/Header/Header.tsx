import { CartWrapper, DefaultHeaderContainer, HeaderNavigation, InnerHeader, LocationSelector } from "./styles";
import logo from "../../assets/images/logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import React, { createContext, useContext, useState } from "react";
import { LocationSelectionMenu } from "./components/LocationSelectionMenu/LocationSelectionMenu";
import { LocationContext, ShoppingCartContext } from "../../App";
import { Link } from "react-router-dom";

interface LocationSelectionMenuContextType {
  setIsSelectingLocation: React.Dispatch<React.SetStateAction<boolean>>;
  isSelectingLocation: boolean;
}
export const LocationSelectionMenuContext = createContext({} as LocationSelectionMenuContextType);

export function DefaultHeader() {
  const [isSelectingLocation, setIsSelectingLocation] = useState(false);
  const { locationData } = useContext(LocationContext)
  const { numberOfItemsInCart } = useContext(ShoppingCartContext)

  function handleKeyDown(event : React.KeyboardEvent<HTMLDivElement>){
    if(event.key === 'Escape'){
      setIsSelectingLocation(false);
    }
  }

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
          <div tabIndex={0} onKeyDown={(e) => handleKeyDown(e)}>
            <LocationSelector
              onClick={() => setIsSelectingLocation(!isSelectingLocation)}
            >
              <MapPin
                size={22}
                weight="fill"
                color={defaultTheme["product-colors"]["purple"]}
              />
              <span>
                {locationData.cep ? (`${locationData.city}, ${locationData.state}`) : locationData.defaultValue}
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
          </div>

          <Link
            to={"/checkout"}
            onFocus={() => setIsSelectingLocation(false)}
          >
            <CartWrapper>
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