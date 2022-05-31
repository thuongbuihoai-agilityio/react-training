const FORM_VALUES = {
  categoryId: {
    value: "",
    rules: ["required"],
    error: "",
  },
  name: {
    value: "",
    rules: ["required"],
    error: "",
  },
  price: {
    value: "",
    rules: ["required", "number"],
    error: "",
  },
  quantity: {
    value: "",
    rules: ["required", "number"],
    error: "",
  },
  description: {
    value: "",
    rules: [],
    error: "",
  },
  images: {
    value: "",
    rules: ["required"],
    error: "",
  }
}

export default FORM_VALUES
