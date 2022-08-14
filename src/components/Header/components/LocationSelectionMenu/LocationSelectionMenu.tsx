import React, { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { LocationContext } from "../../../../layouts/DefaultLayout";
import { CepInput, LocationSelectionContainer, } from "./styles";
import axios from "axios"
import { LocationSelectionMenuContext } from "../../Header";
import { useForm } from "react-hook-form";

export function LocationSelectionMenu() {
  const { setLocation } = useContext(LocationContext)

  const { isSelectingLocation, setIsSelectingLocation } = useContext(LocationSelectionMenuContext)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  const cepFirstPart = useRef<HTMLInputElement>(null);
  const cepSecondPart = useRef<HTMLInputElement>(null);

  function handleFirstPart(e : ChangeEvent<HTMLInputElement>){
    setValue("cepFirstPart", e.target.value)
    
    if(e.target.value.length === 5 ){
      cepSecondPart.current && cepSecondPart.current.focus();
    }
    else if(e.target.value.length === 6){
      let newValue = e.target.value.slice(0, 5)
      e.target.value = newValue;
      setValue("cepFirstPart", newValue);
    }
  }

  function handleSecondPart(e : ChangeEvent<HTMLInputElement>){
    setValue("cepSecondPart", e.target.value);

    if(e.target.value.length === 0){
      cepFirstPart.current && cepFirstPart.current.focus();
    }
    else if(e.target.value.length === 4){
      let newValue = e.target.value.slice(0, 3);
      e.target.value = newValue;
      setValue("cepSecondPart", newValue);
    }
  }

  function onSubmit(data: any) {
    setIsSelectingLocation(false)
    console.log(data)
  }

  return (
    <LocationSelectionContainer onSubmit={handleSubmit(onSubmit)}>
      <h1>Insira um CEP do Brasil</h1>
      <CepInput>
        <input
          id="cep-first-part"
          type="number"
          {...register("cepFirstPart", { required: true, minLength: 5, maxLength: 5 })}
          ref={cepFirstPart}
          onChange={(e) => handleFirstPart(e)}
        />
        -
        <input
          id="cep-second-part"
          type="number"
          {...register("cepSecondPart", { required: true, minLength: 3, maxLength: 3 })}
          ref={cepSecondPart}
          onChange={(e) => handleSecondPart(e)}
        />
      </CepInput>

      {(errors.cepFirstPart || errors.cepSecondPart) &&
        <p id="invalid-cep-message">!CEP inválido</p>
      }

      <button type="submit">Confirmar</button>

    </LocationSelectionContainer>
  )
}