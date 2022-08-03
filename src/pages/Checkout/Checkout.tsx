import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CompleteOrder } from "./components/CompleteOrder/CompleteOrder";
import { ConfirmOrder } from "./components/ConfirmOrder/ConfirmOrder";
import {
  CheckoutContainer,
} from "./styled";

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard")

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

      <div className="wrapper">

        <FormProvider {...addressForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CompleteOrder
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </form>
        </FormProvider>
        <ConfirmOrder />

      </div>

    </ CheckoutContainer>
  )
}