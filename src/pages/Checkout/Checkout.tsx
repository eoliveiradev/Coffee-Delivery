import { useContext, useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { OrderDataContext, ConfirmedOrderDataType, ShoppingCartContext, ShoppingCartItemType, paymentMethodType } from "../../App";
import { CompleteOrder } from "./components/CompleteOrder/CompleteOrder";
import { ConfirmOrder } from "./components/ConfirmOrder/ConfirmOrder";
import {
  CheckoutContainer,
} from "./styled";

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<paymentMethodType>("creditCard")
  const [isCepInvalid, setIsCepInvalid] = useState(true)
  const {confirmedOrderData, setConfirmedOrderData} = useContext(OrderDataContext)
  const {shoppingCart, setShoppingCart } = useContext(ShoppingCartContext)
  const navigateTo = useNavigate()

  const addressForm = useForm<any>({
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    }
  })

  const { register, handleSubmit, watch, formState: { errors } } = addressForm;

  function onSubmit(data: any) {
    let newOrderData: ConfirmedOrderDataType = {
      "products": shoppingCart,
      "address": data,
      "paymentMethod": paymentMethod
    }
    setConfirmedOrderData(newOrderData)
    setShoppingCart([] as ShoppingCartItemType[])
    console.log(newOrderData) // Will send data to api in the future.
    navigateTo("/orderConfirmed")
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="wrapper">
          <FormProvider {...addressForm}>
            <CompleteOrder
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              isCepInvalid={isCepInvalid}
              setIsCepInvalid={setIsCepInvalid}
            />
          </FormProvider>
          <ConfirmOrder isCepInvalid={isCepInvalid}/>
        </div>
      </form>
    </ CheckoutContainer>
  )
}