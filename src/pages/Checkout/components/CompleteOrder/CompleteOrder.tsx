import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Target } from "phosphor-react";
import React, { useState } from "react";
import { useForm, SubmitHandler, appendErrors, useFormContext } from "react-hook-form";
import {
  AddressFormContainer,
  ChoosePaymentMethodContainer,
  CompleteOrderContainer,
  FormSection
} from "./styles";

interface CompleteOrderProps {
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
}

export function CompleteOrder(props: CompleteOrderProps) {

  const {register, handleSubmit, watch, formState: { errors }} = useFormContext()

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
                placeholder="CEP"
                {...register("cep", { required: true, minLength: 8})}
              />
              {errors.cep && 
                <div 
                  className="invalid__input-message"
                >
                  Cep inválido
                </div>
              }
            </label>

            <input
              id="rua"
              type="text"
              placeholder="Rua"
              {...register("rua")}
            />

            <div className="flex">
              <label>
                <input
                  id="numero"
                  type="number"
                  placeholder="Número"
                  {...register("numero", { required: true })}
                />
                {errors.numero && 
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
                {...register("complemento")}
              />
            </div>

            <div className="flex">
              <input
                id="bairro"
                type="text"
                placeholder="Bairro"
                {...register("bairro")}
              />
              <input
                id="cidade"
                type="text"
                placeholder="Cidade"
                {...register("cidade")}
              />
              <input
                id="uf"
                type="text"
                placeholder="UF"
                {...register("uf")}
              />
            </div>
            <button type="submit">Submit Debug</button>
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
              onChange={(e) => props.setPaymentMethod(e.target.value)}
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
              onChange={(e) => props.setPaymentMethod(e.target.value)}
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
              onChange={(e) => props.setPaymentMethod(e.target.value)}
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