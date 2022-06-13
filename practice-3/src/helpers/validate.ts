import { ERROR_MSG } from "@/constants/message";
import { RULES } from "@/constants/rules";
import { FormProps } from "@/types/form";

const validateValue = (value: string, rule: string, errors: {[fieldName: string]: any}, fieldName: string) => {
  if (rule === RULES.REQUIRED) {
    if (value) {
      errors[fieldName].error = "";
    } else {
      errors[fieldName].error = ERROR_MSG.REQUIRED;
    }
  }

  if (rule === RULES.NUMBER) {
    if (typeof +value == RULES.NUMBER) {
      errors[fieldName].error += "";
    } else {
      errors[fieldName].error += ERROR_MSG.NUMBER;
    }
  }

  if(rule === RULES.NEGATIVE) {
    if(+value < 0) {
      errors[fieldName].error += ERROR_MSG.NUMBER;
    } else {
      errors[fieldName].error += "";
    }
  }
}

const validate = (values: FormProps) => {
  const errors = {...values};
  (Object.keys(errors) as (keyof FormProps)[]).map(fieldName => {
    errors[fieldName].rules.map((rule: string)=>{
        validateValue(errors[fieldName].value, rule, errors, fieldName)
      });
    });

  return errors;
}

export {validate};