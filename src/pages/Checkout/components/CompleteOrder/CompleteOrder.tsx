import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Target } from "phosphor-react";
import React, { useState } from "react";
import axios from "axios"
import { useFormContext } from "react-hook-form";
import { paymentMethodType } from "../../../../App";
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

  let cep: string = ""
  function handleCepChange() {
    setCepLenght(cep.length)
    const CEP_API_URL = `https://brasilapi.com.br/api/cep/v2/{${cep}}`

    if (cep.length == 8) {
      axios.get(CEP_API_URL)
        .then(response => {
          let cepData: CepDataType = response.data

          setValue("street", cepData.street);
          setValue("neighborhood", cepData.neighborhood);
          setValue("city", cepData.city);
          setValue("state", cepData.state);

          props.setIsCepInvalid(false)
        })
        .catch(error => {
          console.log(error)
          props.setIsCepInvalid(true)
        })
    }else {
      props.setIsCepInvalid(true)
    }
  }

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

          <div className="form__wrapper">
            <label>
              <input
                id="cep"
                type="number"
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
                    className="invalid__input-message"
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
                    className="invalid__input-message"
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
            <div className="header__content">
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