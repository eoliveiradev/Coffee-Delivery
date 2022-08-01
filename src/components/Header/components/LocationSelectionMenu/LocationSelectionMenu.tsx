import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../../layouts/DefaultLayout";
import { LocationSelectionContainer, SelectLocationButton } from "./styles";
import axios from "axios"
import { LocationSelectionMenuContext } from "../../Header";

const BRAZIl_STATES_API_URL = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"

interface BrazilianStatesApiResponse {
  id: number;
  nome: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
  sigla: string;
}
let BrazilianStates: BrazilianStatesApiResponse[] = []

export function LocationSelectionMenu() {
  const [isFetching, setIsFetching] = useState(true);
  const { setLocation } = useContext(LocationContext)

  const {isSelectingLocation, setIsSelectingLocation} = useContext(LocationSelectionMenuContext)

  function getBrazilianStates() {
    axios.get(BRAZIl_STATES_API_URL)
      .then(response => {
        BrazilianStates = response.data
        setIsFetching(false)
      })
      .catch(err => console.log(err));
  }

  function handleKeyDown(e: KeyboardEvent){
    if((e.key === 'Escape') && isSelectingLocation){
        setIsSelectingLocation(false)
    }
  }

  useEffect(() => {
    if(BrazilianStates.length == 0){
      getBrazilianStates()
    }else{
      setIsFetching(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);  
      console.log("unmounted")
    }
  }, [isSelectingLocation])

  return (
    <LocationSelectionContainer>
      {!isFetching ? (
        <>
          {BrazilianStates.map((state, index) => (
            <SelectLocationButton
              key={index}
              onClick={() => {
                setLocation(state.nome);
                setIsSelectingLocation(false);
              }}
            >
              {state.nome}
            </SelectLocationButton>
          ))}
        </>
      ) : (
        <>
          <h1>Aguarde...</h1>
        </>
      )}
    </LocationSelectionContainer>
  )
}