import FORM_VALUES from "@/constants/form";

const validate = (values) => {
  const errors = {...values};
  if(values.name.rules = "required") {
    errors.name.error = "name is required";
  } else {
    console.log(1);
    errors.name.error = "";
  }
  if(values.description) {
    errors.description.error = "description is required";
  } else {
    errors.description.error = "";
  }
  return errors;
}

export {validate};