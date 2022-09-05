import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Target } from "phosphor-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios"
import { useFormContext } from "react-hook-form";
import { LocationContext, paymentMethodType } from "../../../../App";
import {
  AddressFormContainer,
  ChoosePaymentMethodContainer,
  CompleteOrderContainer,
  FormSection
} from "./styles";

interface CompleteOrderProps {
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<paymentMethodType>>;
  isCepInvalid: boolean;
  setIsCepInvalid: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CepDataType{
  cep: string;
  city: string;
  location: {
    coordinates: {
      latitude: string;
      longitude: string;
    }
    type: string;
  }
  neighborhood: string;
  service: string;
  state: string;
  street: string;
}

export function CompleteOrder(props: CompleteOrderProps) {
  const { register, setValue, formState: { errors } } = useFormContext()
  const [cepLenght, setCepLenght] = useState(0);
  const {locationData, setLocationData} = useContext(LocationContext)

  let cep: string = ""
  function handleCepChange() {
    setCepLenght(cep.length)
    const CEP_API_URL = `https://brasilapi.com.br/api/cep/v2/{${cep}}`
    console.log(cep)
    if (cep.length === 8) {
      axios.get(CEP_API_URL)
        .then(response => {
          let cepData: CepDataType = response.data

          setLocationData({
            ...locationData,
            isLocationValid: true,
            cep: cepData.cep, 
            street: cepData.street,
            neighborhood: cepData.neighborhood,
            city: cepData.city, 
            state: cepData.state
          })

          props.setIsCepInvalid(false)
        })
        .catch(error => {
          console.log(error)
          props.setIsCepInvalid(true)
        })
    }
    else {
      props.setIsCepInvalid(true)
    }
  }

  useEffect(() => {
    props.setIsCepInvalid(!locationData.isLocationValid)
    setValue("cep", locationData.cep);
    setValue("street", locationData.street);
    setValue("neighborhood", locationData.neighborhood);
    setValue("city", locationData.city);
    setValue("state", locationData.state);
  }, [locationData])

  return (
    <CompleteOrderContainer>
      <h1
        className="checkout-title"
      >
        Complete seu pedido
      </h1>
      <FormSection>

        <AddressFormContainer>
          <header>
            <div className="icon-frame">
              <MapPinLine
                size={24}
                color="#C47F17"
              />
            </div>
            <div className="header__content">
              <h1>Endereço de Entrega</h1>
              <p> Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <div className="form-wrapper">
            <label>
              <input
                id="cep"
                type="text"
                maxLength={8}
                placeholder="CEP (apenas números)"
                {...register("cep", { required: true, minLength: 8, maxLength: 8 })}
                onChange={(e) => {
                  cep = e.target.value;
                  handleCepChange()
                }}
              />
              {(props.isCepInvalid && cepLenght > 0) &&
                <>
                  <p>*Apenas números</p>
                  <div
                    className="invalid-input-message"
                  >
                    Cep inválido
                  </div>
                </>

              }
            </label>

            <input
              id="rua"
              type="text"
              placeholder="Rua"
              {...register("street", { required: true })}
            />

            <div className="flex">
              <label>
                <input
                  id="numero"
                  type="number"
                  placeholder="Número"
                  {...register("number", { required: true })}
                />
                {errors.number &&
                  <div
                    className="invalid-input-message"
                  >
                    Número Inválido
                  </div>
                }
              </label>
              <input
                id="complemento"
                type="text"
                placeholder="Complemento (opcional)"
                {...register("complement")}
              />
            </div>

            <div className="flex">
              <input
                id="bairro"
                type="text"
                placeholder="Bairro"
                {...register("neighborhood", { required: true })}
              />
              <input
                id="cidade"
                type="text"
                placeholder="Cidade"
                disabled={!props.isCepInvalid}
                {...register("city", { required: true })}
              />
              <input
                id="uf"
                type="text"
                placeholder="UF"
                disabled={!props.isCepInvalid}
                {...register("state", { required: true })}
              />
            </div>
          </div>
        </AddressFormContainer>

        <ChoosePaymentMethodContainer>
          <header>
            <div className="icon-frame">
              <CurrencyDollar
                size={24}
                color="#8047F8"
              />
            </div>
            <div className="header-content">
              <h1>Pagamento</h1>
              <p> O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </header>
          <div className="paymentMethods-wrapper">
            <input
              id="credit-card"
              value="creditCard"
              type="radio"
              name="paymentMethod"
              checked={props.paymentMethod === "creditCard"}
              onChange={(e) => props.setPaymentMethod(e.target.value as paymentMethodType)}
            />
            <label htmlFor="credit-card">
              <span>
                <CreditCard size={24} />
              </span>
              CARTÃO DE CRÉDITO
            </label>

            <input
              id="debit-card"
              value="debitCard"
              type="radio"
              name="paymentMethod"
              onChange={(e) => props.setPaymentMethod(e.target.value as paymentMethodType)}
            />
            <label htmlFor="debit-card">
              <span>
                <Bank size={24} />
              </span>
              CARTÃO DE DÉBITO
            </label>

            <input
              id="cash"
              value="cash"
              type="radio"
              name="paymentMethod"
              onChange={(e) => props.setPaymentMethod(e.target.value as paymentMethodType)}
            />
            <label htmlFor="cash">
              <span>
                <Money size={24} />
              </span>
              DINHEIRO
            </label>
          </div>
        </ChoosePaymentMethodContainer>
      </FormSection>
    </CompleteOrderContainer>
  )
}