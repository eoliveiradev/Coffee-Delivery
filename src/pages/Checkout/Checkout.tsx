import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CompleteOrder } from "./components/CompleteOrder/CompleteOrder";
import { ConfirmOrder } from "./components/ConfirmOrder/ConfirmOrder";
import {
  CheckoutContainer,
} from "./styled";

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard")
  const [isCepInvalid, setIsCepInvalid] = useState(true)

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
    console.log("submit")
    alert(JSON.stringify(data))
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