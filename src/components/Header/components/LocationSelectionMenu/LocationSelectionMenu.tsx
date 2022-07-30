import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../../layouts/DefaultLayout";
import axios from "axios"

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

let BrazilianStates: BrazilianStatesApiResponse[]

import { LocationSelectionContainer, SelectLocationButton } from "./styles";

export function LocationSelectionMenu() {
  const [isFetching, setIsFetching] = useState(true);
  const { setLocation } = useContext(LocationContext)

  function getBrazilianStates() {
    axios.get(BRAZIl_STATES_API_URL)
      .then(response => {
        BrazilianStates = response.data
        setIsFetching(false)
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getBrazilianStates()
  }, [])

  return (
    <LocationSelectionContainer>
      {!isFetching ? (
        <>
          {BrazilianStates.map((state, index) => (
            <SelectLocationButton
              key={index}
              onClick={() => setLocation(state.nome)}
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