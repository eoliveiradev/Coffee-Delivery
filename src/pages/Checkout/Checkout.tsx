import { useContext, useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ConfirmedOrderDataContext, ConfirmedOrderDataType, ShoppingCartContext, ShoppingCartItemType, paymentMethodType, setDB } from "../../App";
import { CompleteOrder } from "./components/CompleteOrder/CompleteOrder";
import { ConfirmOrder } from "./components/ConfirmOrder/ConfirmOrder";
import {
  CheckoutContainer,
} from "./styled";

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<paymentMethodType>("creditCard")
  const [isCepInvalid, setIsCepInvalid] = useState(true)
  const {confirmedOrderData, setConfirmedOrderData} = useContext(ConfirmedOrderDataContext)
  const {shoppingCart, setShoppingCart } = useContext(ShoppingCartContext)
  const navigateTo = useNavigate()

  useEffect(() => {
    scrollTo(0, 0);
  }, [])


  const addressForm = useForm<any>({
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
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
    setDB('shoppingCart', [])
    
    console.log(newOrderData) // Will send data to api in the future.
    navigateTo("/pedido-confirmado")
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