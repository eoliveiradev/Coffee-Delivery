import { CartWrapper, DefaultHeaderContainer, HeaderNavigation, InnerHeader, LocationSelector } from "./styles";
import logo from "../../assets/images/logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import{ useContext, useState } from "react";
import { LocationSelectionMenu } from "./components/LocationSelectionMenu/LocationSelectionMenu";
import { LocationContext } from "../../layouts/DefaultLayout";

export function DefaultHeader() {

  const [isSelectingLocation, setIsSelectingLocation] =useState(false);
  const {location, setLocation} = useContext(LocationContext)
  
  console.log(location)

  function handleLocationSelectionMenu(action : string){
    if(action === "close"){
      setIsSelectingLocation(false);
    }else if(action === "toggle"){
      setIsSelectingLocation(!isSelectingLocation)
    }
  }

  return (
    <DefaultHeaderContainer>
      <InnerHeader>   

        <img src={logo}></img>

        <HeaderNavigation
          onMouseLeave={() =>handleLocationSelectionMenu("close")}
        >
          <LocationSelector 
            onClick={() => handleLocationSelectionMenu("toggle")}
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

          {isSelectingLocation && (
              <LocationSelectionMenu />
          )}

          <CartWrapper>
            <ShoppingCart 
              size={22} 
              weight="fill" 
              color={defaultTheme["product-colors"]["yellow-dark"]}
            />
          </CartWrapper>
        </HeaderNavigation>
      </InnerHeader>
    </ DefaultHeaderContainer>
  )
}