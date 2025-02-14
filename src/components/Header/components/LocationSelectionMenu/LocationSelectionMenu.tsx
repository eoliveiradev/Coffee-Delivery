import React, { ChangeEvent, KeyboardEventHandler, useContext, useEffect, useRef, useState } from "react";
import { CepInput, LocationSelectionContainer, } from "./styles";
import axios from "axios"
import { LocationSelectionMenuContext } from "../../Header";
import { useForm } from "react-hook-form";
import { CepDataType } from "../../../../pages/Checkout/components/CompleteOrder/CompleteOrder";
import { AddressContext } from "../../../../context/AddressContext";

export function LocationSelectionMenu() {
  const { address, setAddress } = useContext(AddressContext)
  const [isFetchingCepData, setIsFetchingCepData] = useState(false);

  const { setIsSelectingLocation } = useContext(LocationSelectionMenuContext)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  const [isCepValid, setIsCepValid] = useState(false);
  const [fullCep, setFullCep] = useState("");
  const cepFirstPart = useRef<HTMLInputElement>(null);
  const cepSecondPart = useRef<HTMLInputElement>(null);

  function handleCepChange(
    event: ChangeEvent<HTMLInputElement>,
    cepPart: "cepFirstPart" | "cepSecondPart",
    partLength: number,
  ){
    const variations = {
      "cepFirstPart": () => cepSecondPart.current && cepSecondPart.current.focus(),
      "cepSecondPart": () => cepFirstPart.current && cepFirstPart.current.focus()
    }

    setValue(cepPart, event.target.value)

    if (event.target.value.length === (cepPart === "cepFirstPart" ? partLength : 0)) {
      variations[cepPart]();
    }else if(event.target.value.length === partLength + 1){
      const newValue = event.target.value.slice(0, partLength);
      event.target.value = newValue;
      setValue(cepPart, newValue);
    }

    if(cepFirstPart.current && cepSecondPart.current){
      setFullCep(cepFirstPart.current.value + cepSecondPart.current.value)
    }
  }

  const [cepData, setCepData] = useState<CepDataType>({} as CepDataType)
  function handleFetchCepData(){
    const CEP_API_URL = `https://brasilapi.com.br/api/cep/v2/{${fullCep}}`
    setIsFetchingCepData(true)

    axios.get(CEP_API_URL)
      .then(response => {
        setCepData(response.data)
        setIsFetchingCepData(false)
        setIsCepValid(true)
      })
      .catch(error => {
        console.log(error)
        setIsFetchingCepData(false)
        setIsCepValid(false)
      })
  }

  useEffect(() => {
    fullCep.length === 8 && handleFetchCepData();
  }, [fullCep])

  function onSubmit() {
    setIsSelectingLocation(false)
    setAddress({
      ...address, 
      isLocationValid: true,
      cep: cepData.cep, 
      street: cepData.street, 
      neighborhood: cepData.neighborhood, 
      city: cepData.city, 
      state: cepData.state
    })
  }

  function handleKeyDown(event : React.KeyboardEvent){
    if(event.key === 'Escape'){
      setIsSelectingLocation(false);
    }
  }

  return (
    <LocationSelectionContainer 
      onSubmit={handleSubmit(onSubmit)} 
      onMouseLeave={() => setIsSelectingLocation(false)}
      onKeyDown={handleKeyDown}
    >
      <h1>Insira um CEP do Brasil</h1>
      <CepInput>
        <input
          id="cep-first-part"
          type="number"
          maxLength={5}
          autoFocus
          {...register("cepFirstPart", { required: true, minLength: 5, maxLength: 5 })}
          ref={cepFirstPart}
          onChange={(e) => handleCepChange(e, "cepFirstPart", 5)}
        />
        -
        <input
          id="cep-second-part"
          type="number"
          maxLength={3}
          {...register("cepSecondPart", { required: true, minLength: 3, maxLength: 3 })}
          ref={cepSecondPart}
          onChange={(e) => handleCepChange(e, "cepSecondPart", 3)}
        />
      </CepInput>

      {(
        (
          errors.cepFirstPart  || 
          errors.cepSecondPart || 
          (!isCepValid && fullCep.length === 8)
        ) && 
        !(
          isFetchingCepData || 
          isCepValid
        ) 
      ) &&
        <p 
          id="invalid-cep-message" 
          className="cep-errors-message"
        >
          !CEP inválido
        </p>
      }
      {isFetchingCepData && 
        <p 
          id="fetching-cepData-message" 
          className="cep-errors-message"
        >
          Verificando CEP...
        </p>
      }

      <button 
        type="submit" 
        disabled={!isCepValid || isFetchingCepData}
      >
        Confirmar
      </button>
    </LocationSelectionContainer>
  )
}