import styled from "styled-components"

export const CompletOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 100%;
  max-width: 640px;
`

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  
  width: 100%;
`

export const BaseFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 95%;
  max-width: 560px;

  padding: 40px;

  @media(max-width: 1200px){
    padding: 2vw;
  }

  background-color: lightPink;
  border-radius: 6px;
  background-color: ${props => props.theme["base-colors"]["base-card"]};

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

`

export const AdressFormContainer = styled(BaseFormContainer)`
  min-height: 292px;

  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    min-height: 216px;

    label{
      position: relative;

      .invalid__input-message{
        position: absolute;

        display: flex;
        align-items: center;

        min-height: 32px;

        padding: 0 8px;
        border-radius: 4px;

        font-size: 0.8rem;
        color: white;
        background-color: #a6312b;
        opacity: 0.9;
      }
    }

    input{
      height: 42px;

      text-indent: 10px;

      border-radius: 4px;

      background-color: ${props => props.theme["base-colors"]["base-input"]};

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    #cep{
      width: 200px;
    }

    #rua{
      width: 100%;
    }

    #numero{
      width: 200px;
    }

    #complemento{
      flex: 1;
    }

    #bairro{
      width: 200px;
    }

    #cidade{
      flex: 1;
    }

    #uf{
      width: 60px;
    }

    .flex{
    display: flex;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;

    width: 100%;
  }
  }
`

export const ChoosePaymentMethodContainer = styled(BaseFormContainer)`
  min-height: 128px;

  .paymentMethods-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    min-height: 51px;

    input{
      display: none;
    }
    label{
      display: flex;
      justify-content: center;
      align-items: center;

      width: 178px;
      height: 51px;

      background-color: ${props => props.theme["base-colors"]["base-button"]};

      cursor: pointer;
    }
  }
  
`