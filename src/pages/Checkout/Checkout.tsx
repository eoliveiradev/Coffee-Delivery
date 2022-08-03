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
            />
          </FormProvider>
          <ConfirmOrder />
        </div>
      </form>
    </ CheckoutContainer>

  )
}