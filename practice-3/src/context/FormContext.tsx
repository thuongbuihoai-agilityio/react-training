import FORM_VALUES from "@/constants/form";
import { FormProps } from "@/types/form";
import { createContext, useState } from "react";

export const FormContext = createContext<any>(FORM_VALUES);
const FormProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
  const [formValues, setFormValues] = useState<FormProps>(FORM_VALUES);

  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider;
