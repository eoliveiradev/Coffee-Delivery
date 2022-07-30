import React, { useContext } from "react";
import { HeroHeader } from "./components/HeroHeader/HeroHeader";
import { HomeContainer} from "./styles"

export function Home() {
  return (
    <>
      <HomeContainer>
        <HeroHeader/>
      </HomeContainer>
    </>
  )
}