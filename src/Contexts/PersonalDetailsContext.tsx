import React, {createContext, useState} from "react";

export interface IPersonalDetails {
  street: string;
  postalCode: string;
  streetNumber: string;
  city: string;
  email: string;
  name: string;
  cardNumber: string;
  cardDate: string;
  cardCvc: string;
}

const initialPersonalDetailsState: IPersonalDetails = {
  street: "",
  postalCode: "",
  streetNumber: "",
  city: "",
  email: "",
  name: "",
  cardNumber: "",
  cardDate: "",
  cardCvc: "",
}

export const PersonalDetailsContext = createContext<IPersonalDetails | any>(initialPersonalDetailsState)

export const PersonalDetailsProvider = ({children}: { children: React.ReactNode }) => {
  const [personalDetails, setPersonalDetails] = useState<IPersonalDetails>(initialPersonalDetailsState)


  return (<PersonalDetailsContext.Provider
      value={[personalDetails, setPersonalDetails]}>{children}</PersonalDetailsContext.Provider>)
}