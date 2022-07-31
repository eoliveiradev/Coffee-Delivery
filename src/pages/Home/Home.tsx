import React, { useContext } from "react";
import { CoffesMenu } from "../../components/CoffeesMenu/CoffeesMenu";
import { HeroHeader } from "./components/HeroHeader/HeroHeader";
import { HomeContainer} from "./styles"

export function Home() {
  return (
    <>
      <HomeContainer>
        <HeroHeader />
        <CoffesMenu />
      </HomeContainer>
    </>
  )
}