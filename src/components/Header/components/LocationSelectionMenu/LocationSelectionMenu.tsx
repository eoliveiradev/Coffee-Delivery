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
      let newValue = event.target.value.slice(0, partLength);
      event.target.value = newValue;
      setValue(cepPart, newValue);
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
          onChange={(e) => handleCepChange(e, "cepFirstPart", 5)}
        />
        -
        <input
          id="cep-second-part"
          type="number"
          {...register("cepSecondPart", { required: true, minLength: 3, maxLength: 3 })}
          ref={cepSecondPart}
          onChange={(e) => handleCepChange(e, "cepSecondPart", 3)}
        />
      </CepInput>

      {(errors.cepFirstPart || errors.cepSecondPart) &&
        <p id="invalid-cep-message">!CEP inválido</p>
      }

      <button type="submit">Confirmar</button>

    </LocationSelectionContainer>
  )
}