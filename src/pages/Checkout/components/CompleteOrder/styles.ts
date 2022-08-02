import styled from "styled-components"

export const CompletOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 640px;
  min-height: 630px;

  //background-color: ${props => props.theme["base-colors"]["base-card"]};
`

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  min-height: 592px;

  .baseForm-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 95%;
    max-width: 560px;

    header{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;

      width: 100%;
      min-height: 44px;

      .icon-frame{
        display: block;

        width: 22px;
        min-height: 44px;
      }

      .header__content{
        h1{
          font-family: ${props => props.theme["fonts"]["primary-text"]};
          font-size: 1rem;
          font-weight: 400;
          line-height: 20px;
          color: ${props => props.theme["base-colors"]["base-subtitle"]};
        }
        p{
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 18px;
          color: ${props => props.theme["base-colors"]["base-text"]};
        }
      }
    }
  }
`

export const BaseFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  border-radius: 6px;

  background-color: ${props => props.theme["base-colors"]["base-card"]};

`

export const AdressFormContainer = styled(BaseFormContainer)`
  height: 372px;

  .adressForm-wrapper{
    min-height: 292px;
  }

  form{
    width: 100%;
    min-height: 216px;
  }

`


export const ChoosePaymentMethodContainer = styled(BaseFormContainer)`
  height: 208px;

  .choosePaymentMethod-wrapper{
    min-height: 128px;
  }

  .paymentMethods-wrapper{
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    min-height: 51px;
  }
  
`