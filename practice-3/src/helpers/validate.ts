import { ERROR_MSG } from "@/constants/message";
import { RULES } from "@/constants/rules";
import { FormProps } from "@/types/form";

const validateValue = (value: string, rule: string, errors: {[fieldName: string]: any}, fieldName: string) => {
  // check required
  if (rule === RULES.REQUIRED) {
    if (value) {
      errors[fieldName].error = "";
    } else {
      errors[fieldName].error = ERROR_MSG.REQUIRED;
    }
  }

  // check value is number
  if (rule === RULES.NUMBER) {
    if (typeof +value == RULES.NUMBER) {
      errors[fieldName].error += "";
    } else {
      errors[fieldName].error += ERROR_MSG.NUMBER;
    }
  }

  // check value is negative
  if(rule === RULES.NEGATIVE) {
    if(+value < 0) {
      errors[fieldName].error += ERROR_MSG.NUMBER;
    } else {
      errors[fieldName].error += "";
    }
  }
}

// handle validate
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