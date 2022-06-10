import { RULES } from "./rules"

const FORM_VALUES = {
  categoryId: {
    value: "",
    rules: [RULES.REQUIRED],
    error: "",
  },
  name: {
    value: "",
    rules: [RULES.REQUIRED],
    error: "",
  },
  price: {
    value: "",
    rules: [RULES.REQUIRED, RULES.NUMBER, RULES.NEGATIVE],
    error: "",
  },
  quantity: {
    value: "",
    rules: [RULES.REQUIRED, RULES.NUMBER, RULES.NEGATIVE],
    error: "",
  },
  description: {
    value: "",
    rules: [RULES.REQUIRED],
    error: "",
  },
  images: {
    value: "",
    rules: [],
    error: "",
  }
}

export default FORM_VALUES
