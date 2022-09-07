import { createContext, ReactNode, useState } from "react";
import { ShoppingCartItemType } from "./ShoppingCartContext";

interface ConfirmedOrderContextProps{
  children: ReactNode;
}

export type paymentMethodType = "creditCard" | "debitCard" | "cash"

interface AddressType {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface ConfirmedOrderDataType{
  products: ShoppingCartItemType[]
  address: AddressType;
  paymentMethod: paymentMethodType;
}

interface ConfirmedOrderContextType{
  confirmedOrderData: ConfirmedOrderDataType;
  setConfirmedOrderData: React.Dispatch<React.SetStateAction<ConfirmedOrderDataType>>;
}

export const ConfirmedOrderContext = createContext({} as ConfirmedOrderContextType);

export function ConfirmedOrderContextProvider({ children } : ConfirmedOrderContextProps){
  const [confirmedOrderData, setConfirmedOrderData] = useState<ConfirmedOrderDataType>({} as ConfirmedOrderDataType)

  return(
    <ConfirmedOrderContext.Provider
      value={{
        confirmedOrderData,
        setConfirmedOrderData
      }}
    >
      {children}
    </ConfirmedOrderContext.Provider>
  )
}