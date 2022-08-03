import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useForm, SubmitHandler, appendErrors } from "react-hook-form";
import {
  AdressFormContainer,
  ChoosePaymentMethodContainer,
  CompletOrderContainer,
  FormSection
} from "./styles";


export function CompleteOrder() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<any>({
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    }
  });

  const onSubmit: SubmitHandler<any> = data => alert(JSON.stringify(data))

  return (
    <CompletOrderContainer>
      <h1
        className="checkout-title"
      >
        Complete seu pedido
      </h1>
      <FormSection>

        <AdressFormContainer>
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

          <form onSubmit={handleSubmit(onSubmit)}>

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
                placeholder="Complemento"
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
            <button type="submit">submit</button>
          </form>
        </AdressFormContainer>

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
            <input id="credit-card" type="radio" name="paymentMethod" />
            <label htmlFor="credit-card">Cartão de crédito</label>

            <input id="debit-card" type="radio" name="paymentMethod" />
            <label htmlFor="debit-card">Debit</label>

            <input id="cash" type="radio" name="paymentMethod" />
            <label htmlFor="cash">Cash</label>
          </div>
        </ChoosePaymentMethodContainer>

      </FormSection>
    </CompletOrderContainer>
  )
}