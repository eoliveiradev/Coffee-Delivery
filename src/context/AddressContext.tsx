import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { getLS, setLS } from "../utilities/localStorage";

interface AddressContextProps {
  children: ReactNode;
}

interface AddressType {
  isLocationValid: boolean;
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

interface AddressContextType {
  address: AddressType;
  setAddress: React.Dispatch<React.SetStateAction<AddressType>>;
}

export const AddressContext = createContext({} as AddressContextType)

export function AddressContextProvider({ children }: AddressContextProps) {
  const [address, setAddress] = useState({ isLocationValid: false } as AddressType)
  const wasLSDataLoaded = useRef(false)

  function handleLocationLS() {
    const addressLS = getLS("location")

    if (addressLS === null) {
      setLS("location", address)
    } else if (!wasLSDataLoaded.current) {
      setAddress(addressLS)
      wasLSDataLoaded.current = true
    } else {
      setLS("location", address)
    }
  }

  useEffect(() => {
    handleLocationLS();
  }, [address])

  return (
    <AddressContext.Provider
      value={{
        address,
        setAddress
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}